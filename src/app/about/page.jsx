// "use client";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getTime = async () => {
    const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
    const data = await res.json();
    return data.currentTime;
}

const page = async () => {

    const session = await getServerSession(authOptions)
    console.log(session);


    const time = await getTime();

    return (
        <div>
            <h3>Time: {time}</h3>
        </div>
    );
};

export default page;