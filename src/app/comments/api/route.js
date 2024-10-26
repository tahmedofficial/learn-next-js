export const GET = async () => {
    return Response.json({
        comments
    }, {
        headers: {
            "Set-Cookie": "theme-dark"
        }
    })
}

export const POST = async (request) => {
    const newComment = await request.json()
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    })
    return Response.json({
        message: "new comment added",
        comments
    })
}

const comments = [
    {
        id: 1,
        text: "comments 1"
    },
    {
        id: 2,
        text: "comments 2"
    },
    {
        id: 3,
        text: "comments 3"
    },

]