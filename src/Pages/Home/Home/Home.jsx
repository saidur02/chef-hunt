
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner';
import Chef from '../../Chef/Chef';



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
           <Banner></Banner>
           <Chef></Chef>
        </Container>
    );
};

export default Home;