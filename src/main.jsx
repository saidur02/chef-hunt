import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Blogs from './layout/Blogs/Blogs.jsx';
import Home from './layout/Home/Home.jsx';
import Main from './layout/Main/Main.jsx';
import Login from './layout/Login/Login.jsx';
import Chef from './layout/Chef/Chef.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/chef/:id',
    element: <Chef></Chef>,
    loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
