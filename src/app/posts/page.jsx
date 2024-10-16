import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
    title: "Post",
    description: "post",
};

const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    if (data) {
        redirect(`/posts/${data[0].id}`)
    }
    return data
}

const page = async () => {

    const postData = await getPost();

    return (
        <div>
            <h3>All Post</h3>
            <div className='grid grid-cols-3 gap-4'>
                {
                    postData?.map(post => (
                        <div key={post.id} className='border p-3 space-y-4'>
                            <h2>title: {post.title}</h2>
                            <h3>Description: {post.body}</h3>
                            <Link href={`/posts/${post.id}`}>
                                <button className='btn bg-black text-white mt-10'>See Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;