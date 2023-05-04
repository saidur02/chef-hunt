
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import React, { useEffect, useState } from 'react'



// const [chef,setChef] = useState ([])


// useEffect( () => {
//     fetch('http://localhost:5000/chef')
//     .then(res => res.json())
//     .then(data => setChef(data))
//     .catch(error => console.error(error))

// },[])




const Home = () => {
    
   
    return (
        <Container>
            <div>
            <Banner></Banner>         
            </div>
            <div>
               
            </div>
        </Container>
    );
};

export default Home;