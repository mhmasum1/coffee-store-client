import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Coffee added successfully!',
                        icon: 'success',
                        draggable: true,
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#DBC1AC] px-4">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10">

                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-amber-700 mb-4">
                        Add a New Coffee ☕
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Fill out the details below to add a new coffee to the collection.
                    </p>
                </div>


                <form onSubmit={handleAddCoffee} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block font-medium text-gray-700 mb-2">
                                Coffee Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter coffee name"
                                required
                            />
                        </div>


                        <div>
                            <label className="block font-medium text-gray-700 mb-2">
                                Chef
                            </label>
                            <input
                                type="text"
                                name="Chef"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter coffee Chef"
                                required
                            />
                        </div>


                        <div>
                            <label className="block font-medium text-gray-700 mb-2">
                                Supplier
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter supplier name"
                            />
                        </div>


                        <div>
                            <label className="block font-medium text-gray-700 mb-2">
                                Taste
                            </label>
                            <input
                                type="text"
                                name="taste"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter taste"
                            />
                        </div>


                        <div>
                            <label className="block font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                name="price"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter coffee category"
                            />
                        </div>


                        <div>
                            <label className="block font-medium text-gray-700 mb-2">
                                Details
                            </label>
                            <input
                                type="text"
                                name="details"
                                className="input input-bordered w-full rounded-xl"
                                placeholder="Enter details"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-2">
                            Photo
                        </label>
                        <input
                            type="text"
                            name="photo"
                            className="input input-bordered w-full rounded-xl"
                            placeholder="Enter photo URL"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-xl mt-4"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
