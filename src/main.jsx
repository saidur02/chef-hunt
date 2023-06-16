import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/SignUp/Registration.jsx';
import Chef from './Pages/Chef/Chef.jsx';
import Main from './layout/Main/Main.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';




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
        element:<Login></Login>

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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
