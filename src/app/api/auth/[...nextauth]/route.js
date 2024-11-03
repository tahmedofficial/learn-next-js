import mongoDB from "@/lib/mongoDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_Auth_secret,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [

        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your Email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" },
            },
            async authorize(credentials) {

                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }
                if (email) {

                    const db = await mongoDB();
                    const usersCollection = db.collection("user");
                    const currentUser = await usersCollection.findOne({ email });

                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }
        }),

        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type
            }
            return token
        },

        async session({ session, token }) {
            session.user.type = token.type
            return session
        },
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }