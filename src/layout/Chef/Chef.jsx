import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MainSection from '../MainSection/MainSection';

const Chef = () => {
    const {id} = useParams();
    const chefDetails = useLoaderData()
  
   
    return (
        <div>
           
             <h2> Total Chef : {chefDetails.length} </h2>
             {
                chefDetails.recipe_list.map(chf => <MainSection
                key={chf._id}
                chef={chf}
                ></MainSection>)
             }
        </div>
    );
};

export default Chef;