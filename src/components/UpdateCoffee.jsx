import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, Chef, supplier, taste, price, photo, details } = useLoaderData();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());

        fetch(`https://coffee-store-server-theta-indol.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#DBC1AC] px-4">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-amber-700 mb-4">
                        Update Coffee ☕
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Update the information below to modify the coffee details.
                    </p>
                </div>

                <form onSubmit={handleUpdateCoffee} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">Coffee Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter coffee name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">Chef</label>
                            <input
                                type="text"
                                name="Chef"
                                defaultValue={Chef}
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter coffee Chef"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">Supplier</label>
                            <input
                                type="text"
                                name="supplier"
                                defaultValue={supplier}
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter supplier name"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">Taste</label>
                            <input
                                type="text"
                                name="taste"
                                defaultValue={taste}
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter taste"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">Category</label>
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter coffee category or price"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">Details</label>
                            <input
                                type="text"
                                name="details"
                                defaultValue={details}
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter details"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-2">Photo</label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            className="input input-bordered w-full rounded-xl"
                            placeholder="Enter photo URL"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-xl mt-4"
                    >
                        Update Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
