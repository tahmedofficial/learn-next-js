import mongoDB from "@/lib/mongoDB"

export const POST = async (requset) => {
    try {
        const db = await mongoDB();
        const userCollection = db.collection("user");
        const newUser = await requset.json();
        const res = await userCollection.insertOne(newUser);
        return Response.json({ message: "new user added" })
    } catch (error) {
        return Response.json({ message: "Something went wrong" })
    }
}