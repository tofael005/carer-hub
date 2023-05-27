import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cards }) => {
    // console.log(cards)
    const { jobTitle, company, jobType, jobTime, location, salary, logo, _id  } = cards
    console.log(_id)
    return (
        <div>
            <div className="border-2 border-gray-200 p-6 rounded-md">
                <img className="w-36 h-20" src={logo} alt="" />
                <h1 className="text-2xl font-semibold py-3">{jobTitle}</h1>
                <p className="text-gray-500">{company}</p>
                <div className="py-3">
                    <button className="text-indigo-500 px-2 border-2 border-indigo-400 rounded">{jobType}</button>
                    <button className="text-indigo-500 px-2 border-2 border-indigo-400 rounded ml-4">{jobTime}</button>
                </div>
                <div className="flex py-2">
                    <div className="flex ">
                        <img src="/assets/Icons/Frame-4.png" alt="" />
                        <p className="text-gray-500 ml-2">{location}</p>
                    </div>
                    <div className="flex ml-4">
                        <img src=" /assets/Icons/Frame.png" alt="" />
                        <p className="text-gray-500 ml-2">{salary}</p>
                    </div>
                </div>
                <div className="py-6 max-w-[1240px] mx-auto">
                    <Link to={`/job-details/${_id}`}>
                        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-6 rounded text-white font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;