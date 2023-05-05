import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="d-flex justify-content-between">

            <div className='text-center mt-5' >
                <h2>Here Some Best Chef Details</h2>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;