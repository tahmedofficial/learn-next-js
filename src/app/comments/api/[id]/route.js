export const PATCH = async (request, { params }) => {
    console.log(params.id);
    const body = await request.json();
    const index = comments.findIndex(comm => comm.id === parseInt(params.id));
    comments[index] = {
        text: body.text
    }
    return Response.json({
        message: "comment updated"
    })
}

export const DELETE = async (request, { params }) => {
    console.log(params.id);
    const newComment = comments.filter(c => c.id !== parseInt(params.id));
    return Response.json({
        message: "comment deleted",
        newComment
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