import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MainSection from '../MainSection/MainSection';

const Chef = () => {
    const {id} = useParams();
    const chefDetails = useLoaderData();
  
   
    return (
        <div>
           
             <h2> Total Chef : {chefDetails.length} </h2>
            {
                chefDetails.map(chef =>console.log(chef))
            }
        </div>
    );
};

export default Chef;