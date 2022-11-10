import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard';
import Banner from './Banner';
import Carousel from './Carousel';

const Home = () => {
const [services, setServices] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
    return (
        <div>
            <Banner></Banner>
           <Carousel></Carousel>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                services.map(service =><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
          </div>
          <Link to='/services'><button className='btn my-5 bg-orange-600 hover:bg-yellow-400 px-10'>See More</button></Link>  

        </div>
    );
};

export default Home;