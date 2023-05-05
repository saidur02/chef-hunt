import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Shared/Nav/Navbar';
import Footer from '../Shared/Nav/Footer';


const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
               <Footer></Footer>   
        </div>
    );
};

export default Main;