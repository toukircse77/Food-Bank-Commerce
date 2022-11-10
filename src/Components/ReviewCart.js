import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const ReviewCart = ({review}) => {
	const {user} = useContext(AuthContext)
    const { reviewName,message,email } = review;
    return (
		<div>
		<div className="p-6 sm:p-12 m-5 rounded-2xl bg-gray-900 text-gray-100">
<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
	<img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
	<div className="flex flex-col">
		<h4 className="text-lg font-semibold text-center md:text-left">{reviewName}</h4>
		<p className="dark:text-gray-400">My review: {message}</p><br />
		<span>{email}</span>
	</div>
</div>
</div>
	</div>
    );
};

export default ReviewCart;