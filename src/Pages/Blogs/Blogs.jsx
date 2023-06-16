import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <div className=''>
                <h2>Tell us the differences between uncontrolled and controlled components?</h2>
                <p>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className=''>
                <h2>Tell us the differences between uncontrolled and controlled components?</h2>
                <p>Ans: any : The prop can be of any data type. <br />
                    bool : The prop should be a Boolean.<br />
                    number : The prop should be a number.<br />
                    string : The prop should be a string.<br />
                    func : The prop should be a function.<br />
                    array : The prop should be an array.<br />
                    object : The prop should be an object.</p>
            </div>
            <div className=''>
                <h2>Tell us the difference between nodejs and express js.</h2>
                <p>Ans: Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
            </div>
            <div className=''>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </Container>
    );
};

export default Blogs;