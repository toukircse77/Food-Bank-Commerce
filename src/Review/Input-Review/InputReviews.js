import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const InputReviews = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL, } = user;
    const services = useLoaderData();
    const { name, image, price, _id } = services;
    
    const handleReviewForm = event => {
        event.preventDefault();
        const form = event.target;
        const customer = form.customerName.value;
        const rating = form.rating.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName:name,
            price,
            customer:customer,
            reting: rating,
            email: email,
            message: message,
            img: photoURL, 
        }
        fetch('http://localhost:5000/AllReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('success fully set Database')
                    
                    event.target.reset()

                }
            }).catch(error => console.log(error))

       
    }

    
    return (
        <div>
            <div>
                <form onSubmit={handleReviewForm} className='mb-10'>
                    <h2 className="text-4xl my-2 ">Please enter a review!! <span className='font-semibold text-orange-600'></span></h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
                        <input name='customerName' type="text" placeholder="name" defaultValue={displayName} className="input input-bordered w-full " required />
                        <input name='rating' type="number" placeholder="rating" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="your Number" className="input input-bordered w-full" required />
                        <input name='email' type="email" placeholder="your email" defaultValue={user?.email} className="input input-bordered w-full " />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered h-20 my-3 w-80" placeholder="write something about us" required></textarea><br />
                    <input className='btn btn-warning hover:bg-orange-500 ' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default InputReviews;