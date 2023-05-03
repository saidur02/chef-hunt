
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';


// const [chef,setChef] = useState ([])


// useEffect( () => {
//     fetch('http://localhost:5000/chef')
//     .then(res => res.json())
//     .then(data => setChef(data))
//     .catch(error => console.error(error))

// },[])




const Home = () => {
    const {id} = useParams();
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    return (
        <Container>
            <div>
            <Banner></Banner>         
            </div>
            <div>
                <h2> Total Chef : {chefDetails.length} </h2>
            </div>
        </Container>
    );
};

export default Home;