import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async (request) => {

    const token = cookies(request).get("next-auth.session-token")
    console.log("token", token);

    if (!token) {
        return NextResponse.redirect(new URL("/api/auth/signin", request.url))
    }
}

export const config = {
    matcher: ["/gallery", "/services"]
}