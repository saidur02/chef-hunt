import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './layout/Home/Home.jsx';
import Main from './layout/Main/Main.jsx';
import Login from './layout/Login/Login.jsx';
import Chef from './layout/Chef/Chef.jsx';
import Blogs from './layout/Blogs.jsx';
import Registration from './layout/Registration.jsx';



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
        element: <Blogs></Blogs>
      },
      {
        path:'/login',
        element:<Login></Login>,

      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ]
  },
  {
    path: '/chef/:id',
    element: <Chef></Chef>,
    loader: ({ params }) => fetch(`https://chef-server-orcin.vercel.app/chef/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
