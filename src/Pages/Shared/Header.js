import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogoutBtn = () =>{
    logOut()
    .then(result =>{

    }).catch(error => console.error(error))
  }
    const menuItems = 
    <>
    {
      user?.uid ? <></> : <></>
    }
    <li className='font-semibold  '><Link to='/' >Home</Link></li>
    <li className='font-semibold  '><Link to='/services' >Services</Link></li>   
    <li className='font-semibold  '><Link to='/faq' >FAQ</Link></li>
    <li className='font-semibold  '><Link to='/blog' >Blog</Link></li>
    {
                        user?.uid ?
                         <>
                         <li className='font-semibold  '><Link to='/myreview' >My Review</Link></li>
                        <li className='font-semibold  '><Link to='/addService' >Add Service</Link></li>
                        <li onClick={handleLogoutBtn} className='font-semibold'><Link to='/' >Logout</Link></li>
                         </>
                          : 
                          <>
                           <li className='font-semibold'><Link to='/login' >Login</Link></li>
                           <li className='font-semibold'><Link to='/signup' >SignUp</Link></li>
                          </> 
                        
                    }
    
   
    
    </>
    return (
        <div className="navbar h-15 mb-4  bg-yellow-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content text-center  p-2 shadow bg-base-300 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case  text-xl"><img className='w-10 rounded-full'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzXbpAxicgZCx0MOgvbfweEKVDYY2aETS1A&usqp=CAU' alt="" /></Link>
    <span className='text-xl font-semibold text-yellow-300'>FoodBank</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
    );
};

export default Header;