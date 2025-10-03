import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div style={{
            background: 'oklch(28.6% 0.066 53.813)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '1rem 0'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{
                        fontSize: '1.875rem',
                        fontWeight: 'bold',
                        color: 'white',
                        text: "white",
                    }}>
                        ☕ Cup & Comfort
                    </h1>
                </Link>
                <Link to="/addCoffee">
                    <button style={{
                        backgroundColor: 'white',
                        fontWeight: 'bold',
                        color: 'black',
                        padding: '0.5rem 1.5rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>
                        Add Coffee
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;