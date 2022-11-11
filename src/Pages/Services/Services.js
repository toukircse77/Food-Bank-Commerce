import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllserviceCart from '../../Components/AllserviceCart';

const Services = () => {
    const items = useLoaderData();

    return (
           <div className=' grid gap-5  m-5 grid-cols-1 md:grid-cols-3'>
            {items.map(item=> <AllserviceCart
            key={item._id}
            item={item}
            ></AllserviceCart> )}
           </div>     
    );
};

export default Services;