import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData,} from 'react-router-dom';

const UpdateReview = () => {

    const storeUser = useLoaderData();

    const { customer, message,  email, reting, _id } = storeUser;

    

    const [user, setUser] = useState(storeUser)

    const handleSubmitBtn = (event) => {
        event.preventDefault()
        // console.log(user);
        fetch(`http://localhost:5000/all-reviews/${storeUser?._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    
                    toast.success('update Reviews succcessfully')

                } else {

                }
                
            })
    }
    //all input fild value onblure
    const heldeleOnBlure = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <>
 <section className="p-6 bg-gray-800 text-gray-50 w-[100%] justify-center lg:flex mt-16">


<form onSubmit={handleSubmitBtn} className=" w-[100%] lg:w-[50%] ">
    <div className="grid lg:grid-cols-1 grid-cols-1 ">
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">Full Name</label>
            <input onChange={heldeleOnBlure} defaultValue={storeUser?.customer} id="firstname" name='name' type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5  px-3" required />
        </div>
        <br />
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">Email</label>
            <input onChange={heldeleOnBlure} defaultValue={storeUser?.email} id="email" name='email' type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-black py-2 placeholder:px-5  px-3" required />
        </div>
        <br></br>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">Service Rating</label>
            <input onChange={heldeleOnBlure} id="rating" defaultValue={reting} name='rating' type="number" placeholder="rating..." className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-black py-2 placeholder:px-5 px-3" required />
        </div>
        <br></br>
        <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">Message</label>
            <textarea onChange={heldeleOnBlure} name='message' defaultValue={message} className="textarea text-black textarea-secondary w-full" placeholder="Bio" required></textarea>
        </div>

    </div>
    <br></br>
    <div className="col-span-full sm:col-span-3">
        <button type='submit' className='w-32 mx-auto  py-2 bg-gray-300 text-black hover:bg-amber-500 rounded-lg '>Submit</button>
    </div>





</form>
</section>  
        </>
    );
};

export default UpdateReview;