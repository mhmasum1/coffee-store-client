import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import Hero from './Hero';
import InstagramGallery from './InstragramGallery';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div>
            <Hero />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-8'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
            <InstagramGallery></InstagramGallery>
        </div>
    );
};

export default Home;