import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MainSection from '../MainSection/MainSection';

const Chef = () => {
    const { id } = useParams();
    const chefDetails = useLoaderData()
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChefs(data)
            })
    }, [])


    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                chefs.map(chef => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={chef.picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{chef.name}</h2>
                        <p>Experience: {chef.experience}</p>
                        <p>Recipes: {chef.recipes}</p>
                        <p>Likes: {chef.likes}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"> View Recipes </button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Chef;
