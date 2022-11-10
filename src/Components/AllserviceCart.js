import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllserviceCart = ({ item }) => {
    const { image, price, name, description, _id } = item;
    return (
        <div>
            <div className="card w-96 bg-base-400  rounded-lg shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body bg-slate-200">
                    <h2 className="card-title text-orange-700 text-3xl font-semibold">{name}</h2>
                    <p className='btn bg-yellow-600 text-lg w-50'>price : ${price}</p>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/serviceDetails/${_id}`}>
                            <button className="btn btn-primary">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllserviceCart;