import React from 'react';
import { Link } from 'react-router';

const Header = () => {

    return (
        <div className='bg-base-200 p-4'>
            <div className='max-w-7xl mx-auto'>
                <nav className='flex justify-between items-center'>
                    <Link to="/">
                        <h1 className='text-3xl font-bold'>☕ Coffee Shop</h1>
                    </Link>
                    <Link to="/addCoffee">
                        <button className='btn btn-primary'>Add Coffee</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;