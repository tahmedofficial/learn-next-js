"use client";
import React from 'react';


const page = () => {

    const handleRegister = async (event) => {
        event.preventDefault();
        const url = process.env.NEXT_PUBLIC_URI;
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const type = form.type.value;
        const newUser = { name, email, password, type }

        const res = await fetch(`${url}/api/auth/signup/new-user`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        console.log(res);
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className='flex flex-col gap-4 items-center mt-20'>
                    <div>
                        <input className='outline-none bg-gray-100 rounded-md p-2' type="text" name='name' placeholder='your name' />
                    </div>
                    <div>
                        <input className='outline-none bg-gray-100 rounded-md p-2' type="email" name='email' placeholder='your email' />
                    </div>
                    <div>
                        <input className='outline-none bg-gray-100 rounded-md p-2' type="password" name='password' placeholder='password' />
                    </div>
                    <div>
                        <select name='type' className='outline-none bg-gray-100 rounded-md p-2'>
                            <option disabled selected>Chose one?</option>
                            <option>admin</option>
                            <option>modaretor</option>
                            <option>user</option>
                        </select>
                    </div>
                    <button className='btn w-36'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default page;