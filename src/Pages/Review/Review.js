import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Myreview from '../../Components/Myreview';
import { AuthContext } from '../../Context/AuthProvider';

const Review = () => {
    const {user} = useContext(AuthContext);
    const [myreview, setMyreview] = useState([])
    useEffect(()=>{
        fetch(`https://sample-server-mu.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyreview(data));
    },[])

    const handleReviewForm = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}  ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const reviews = {
            reviewName: name,
            phone,
            email,
            message
        }
        fetch('https://sample-server-mu.vercel.app/reviews',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reviews),
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged)
            toast.success("review successfully")
            form.reset();
        })
        .catch(err => console.error(err));

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            
            <div><form onSubmit={handleReviewForm} className='mb-10'>
        <h2 className="text-4xl my-2 ">Please enter a review!! <span className='font-semibold text-orange-600'></span></h2>
        <div  className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
        <input name='firstName' type="text" placeholder="first Name" className="input input-bordered w-full " required />
        <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " />
        <input name='phone' type="text" placeholder="your Number" className="input input-bordered w-full" required />
        <input name='email' type="email" placeholder="your email" defaultValue={user?.email} className="input input-bordered w-full " />
        </div>
        <textarea name='message' className="textarea textarea-bordered h-20 my-3 w-80" placeholder="write something about us" required></textarea><br/>
        <input className='btn btn-warning hover:bg-orange-500 ' type="submit" value="Submit Review" />
        </form>
        </div>
            <div>
            <h1 className='text-3xl font-bold text-yellow-600'>My Review</h1>
            {
                myreview.map(myview =><Myreview
                key={myview._id}
                myview = {myview}
                user={user}
                ></Myreview> )
                }
            </div>
        
        </div>
    );
};

export default Review;