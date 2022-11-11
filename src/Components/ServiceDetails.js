import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import DynamicCard from './DynamicCard';
import ReviewCart from './ReviewCart';

const ServiceDetails = () => {
    const navigat = useNavigate()
    const location = useLocation()
    const details = useLoaderData();
    const {user} = useContext(AuthContext)
    const [allReviws, setReviws] = useState([]);
    useEffect(() => {
        fetch(`https://sample-server-mu.vercel.app/all-review?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviws(data))
    }, [])

    const { image, price, name, description, order, rate,_id } = details;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className=" mx-auto w-96   rounded-lg">
                <div>
                <figure><img className='w-50 rounded-xl' src={image} alt="photo" /></figure>
                <div className="card-body bg-slate-200">
                    <h2 className="card-title text-orange-700 text-3xl font-semibold">{name}</h2>
                    <p className='btn bg-yellow-600 text-lg h-5 w-full'>price : ${price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                        <label className='btn bg-yellow-600'>Quantity : {order}</label>
                        <label htmlFor="" className='bg-yellow-600 btn'>ratings : {rate}</label>
                        <button className="btn w-full btn-primary">Order Now</button>
                    </div>
                </div>
                </div>
              
            </div>
            <div className='flex flex-col gap-4'>

                {
                    user?.email ?
                     <>
                     <Link to={`/add-reviws/${details?._id}`}> <button className='btn btn-warning'>Add review</button> </Link>
                     </>
                      : 
                      <>
                      <section className="py-6 mr-10 bg-gray-800 text-gray-50">
                                    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                                        <h1 className="text-4xl font-bold leading-none text-center">Sign up now</h1>
                                        <p>please log in to access reviews add services</p>
                                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                                            <Link to='/signup'>
                                                <button className="px-6 py-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sing up</button>
                                            </Link>
                                            <Link to='/login' state={{ from: location }} replace >
                                                <button className="px-6 py-2 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Log in</button>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                      </>
                }
                
                
                        <div className="text-4xl text-center">
                            <p>Total Reviews :
                                <span className="font-semibold text-amber-500"> {allReviws.length}..</span>
                            </p>
                        
                        </div>
                        <div className="overflow-x-auto w-full">
                        <table className="table w-full">


                            {
                                allReviws.length > 0 ?
                                    <>
                                        <thead>
                                            <tr>

                                                <th className=''>Name : {allReviws.length}</th>
                                                <th>Email</th>
                                                <th>Review Reting</th>

                                            </tr>
                                        </thead>
                                    </>
                                    :
                                    <>
                                        <h1 className='text-center text-2xl'>Not Founded Reviews</h1>
                                    </>
                            }

                            {/* ---table--- */}
                            <tbody>

                                {
                                    allReviws.map(data => <DynamicCard user={user} data={data} key={data._id} >

                                    </DynamicCard>)
                                }
                            </tbody>


                        </table>
                    </div>
                   

                
            </div>
                    

        </div>
    );
};

export default ServiceDetails;