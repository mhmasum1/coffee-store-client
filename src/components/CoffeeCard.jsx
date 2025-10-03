import React from 'react';
import { Link } from 'react-router-dom'; // ✅ react-router-dom ব্যবহার করুন
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, Chef, supplier, photo } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        });
    };

    return (
        <div className="bg-gray-100 p-6 rounded-xl flex items-center justify-between shadow-md border">
            {/* Photo */}
            <div className="w-32 h-32 mr-6">
                <img src={photo} alt={name} className="w-full h-full object-cover rounded-lg drop-shadow-lg" />
            </div>

            {/* Coffee Info */}
            <div className="flex-1 space-y-1">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p><span className="font-semibold">Chef:</span> {Chef}</p>
                <p><span className="font-semibold">Supplier:</span> {supplier}</p>
            </div>

            {/* Actions */}
            <div className="space-y-2 flex flex-col ml-4">
                <Link to={`/coffee/${_id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md text-sm">View</button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm">Edit</button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
