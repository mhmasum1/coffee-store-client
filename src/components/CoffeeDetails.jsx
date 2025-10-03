import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/coffees/${id}`)
            .then(res => res.json())
            .then(data => setCoffee(data));
    }, [id]);

    if (!coffee) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <img src={coffee.photo} alt={coffee.name} className="w-48 h-48 mx-auto object-cover mb-4" />
            <h2 className="text-3xl font-bold mb-2">{coffee.name}</h2>
            <p><strong>Chef:</strong> {coffee.Chef}</p>
            <p><strong>Supplier:</strong> {coffee.supplier}</p>
            <p><strong>Taste:</strong> {coffee.taste}</p>
            <p><strong>Category:</strong> {coffee.price}</p>
            <p><strong>Details:</strong> {coffee.details}</p>
        </div>
    );
};

export default CoffeeDetails;
