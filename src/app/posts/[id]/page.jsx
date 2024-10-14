import React from 'react';

export const generateMetadata = async ({ params }) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
    const data = await res.json();

    return {
        title: data.title,
        description: data.body,
        keywords: data.body.split(" ")
    }
}

// export const metadata = {
//     title: "Post Details",
//     description: "post",
// };

const postDetailsData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

const page = async ({ params }) => {

    const postData = await postDetailsData(params?.id);

    return (
        <div>
            <h3>Title: {postData?.title}</h3>
            <h3>Description: {postData?.body}</h3>
        </div>
    );
};

export default page;