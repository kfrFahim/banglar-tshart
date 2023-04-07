import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './componants/Layout/Layout';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import OrderReview from './componants/OrderReview/OrderReview';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('tsharts.json')
      },
      {
        path:"review",
        element:<OrderReview></OrderReview>
      },
      {
        path:"about",
        element:<About></About>
      },
    ]
   
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
