import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
                    const currentUser = users.find(user => user.email === email)
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }
        })
    ]
}

const handler = NextAuth(authOptions)

const users = [
    {
        id: 1,
        name: "Tanvir",
        email: "t@gmail.com",
        password: "password"
    },
    {
        id: 2,
        name: "Samiur",
        email: "s@gmail.com",
        password: "password"
    },
    {
        id: 3,
        name: "Mehedi",
        email: "m@gmail.com",
        password: "password"
    },
]

export { handler as GET, handler as POST }