import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "../Components/ServiceDetails";
import Main from "../LayOut/Main";
import AddService from "../Pages/Add Service/AddService";
import Blog from "../Pages/Blog/Blog";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Review from "../Pages/Review/Review";
import Services from "../Pages/Services/Services";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "../Private-Route/PrivateRoute";
import InputReviews from "../Review/Input-Review/InputReviews";
import MyReview from "../Review/My-Review/MyReview";
import UpdateReview from "../Review/updateReview/UpdateReview";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
            path:'/',
            element:<Home></Home>
           },
            {
            path:'/services',
            element:<Services></Services>,
            loader: ()=> fetch('http://localhost:5000/services')
           },
            {
            path:'/serviceDetails/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/serviceDetails/${params.id}`)
           },
           
            {
            path:'/review',
            element: <PrivateRoute><Review></Review></PrivateRoute> 
           },
            {
            path:'/myreview',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute> 
           },
           {
            path: '/update/:id',
            element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/all-reviews/${params.id}`)
           },
           {
            path:'/addService',
            element: <PrivateRoute> <AddService></AddService></PrivateRoute>
           },
            {
            path:'/login',
            element:<Login></Login>
           },
            {
            path:'/signup',
            element:<Signup></Signup>
           },
            {
            path:'/blog',
            element:<Blog></Blog>
           },
            {
            path:'/faq',
            element:<FAQ></FAQ>
           },
           {
            path:'/add-reviws/:id',
            element:<InputReviews></InputReviews>,
            loader: ({params})=> fetch(`http://localhost:5000/serviceDetails/${params.id}`)
           }
            
    ]
        
    }
])