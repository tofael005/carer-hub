import React from 'react';

const FinterPage = ({card}) => {
    return (
        <div className="mt-20 mb-20">
            <div className=" md:flex flex-row  justify-between mt-20 mb-20 items-center border-2 border-b-gray-300 p-8 rounded-md">
                <div className=" justify-between items-center md:flex flex-row  gap-4">
                    <div>
                        <img className="md:w-32 w-full h-15 py-4" src={card.logo} alt="" />
                    </div>
                    <div className="md:ml-20 md:text-left text-center">
                        <h1 className="font-semibold text-3xl">{card.jobTitle}</h1>
                        <p className="py-2 md:text-left text-center">{card.company}</p>
                        <div className="py-3 md:text-left">
                            <button className="text-indigo-500 px-2 border-2 border-indigo-400 rounded">{card.jobType}</button>
                            <button className="text-indigo-500 px-2 border-2 border-indigo-400 rounded ml-4">{card.jobTime}</button>
                        </div>
                        <div className="flex gap-4 text-center">
                            <div className="flex items-center">
                                <img src="/assets/Icons/Frame-4.png" alt="" />
                                <p>{card.location}</p>
                            </div>
                            <div className="flex items-center">
                                <img src="/assets/Icons/Frame.png" alt="" />
                                <p>{card.salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="bg-gradient-to-r block mx-auto mt-10 from-[#7E90FE] to-[#9873FF] py-2 px-6 rounded text-white font-semibold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FinterPage;