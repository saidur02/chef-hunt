import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Shared/Nav/Navbar';


const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
                  
        </div>
    );
};

export default Main;