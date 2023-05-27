import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-20 text-center">
            <img className="w-[800px] mx-auto rounded-full" src="/assets/All Images/9410.jpg" alt="" />
            <Link to="/">
                <button className="bg-indigo-400 font-semibold text-white px-10 py-3 rounded">Got to Home</button>
            </Link>
        </div>
    );
};

export default Error;