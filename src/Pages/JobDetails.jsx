import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDataGlobally } from '../Context';
import { getData, setData } from '../Utility/LocalStorage';

const JobDetails = () => {

    const { cards } = useDataGlobally()
    const { id } = useParams()
    const job = cards.find((card) => card._id === id);
    if (!job) {
        return
    }

    const handleJobData = (id) => {
        setData(id)
    }

    return (
        <div className="mt-5 mb-40">
            <h1 className="text-center text-3xl font-bold py-20">Job Details</h1>
            <div className="md:grid md:grid-cols-3 gap-6">
                <div className="max-w-[850px] col-span-2 p-4 rounded-md bg-indigo-100">
                    <p><span className="font-bold">Job Description:</span> <br /> {job.description}</p>
                    <p className="py-2"><span className="font-bold">Job Responsibility:</span> <br /> {job.jobResponsibility}</p>
                    <p className="py-2"><span className="font-bold">Educational Requirements:</span> {job.requirements}</p>
                    <p><span className="font-bold">Experiences:</span> {job.experiences}</p>
                </div>
                <div className="p-4 rounded-md">
                    <h1 className="font-bold">Job Details</h1>


                    <div className="flex items-center gap-2">
                        <img className='w-6 h-6' src="/assets/Icons/Frame.png" alt="" />
                        <p className="py-2"><span className="font-bold">Salary:</span> {job.salary}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img className='w-6 h-6' src="/assets/Icons/Frame-1.png" alt="" />
                        <p><span className="font-bold">Job Title :</span> {job.jobTitle} </p>
                    </div>
                    <h1 className="font-bold py-4">Contact Information</h1>
                    <hr className="border-1 border-gray-400" />

                    <div className="flex items-center gap-2">
                        <img className='w-6 h-6' src="/assets/Icons/Frame-2.png" alt="" />
                        <p className=" py-2"><span className="font-bold">Phone :</span> {job.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className='w-6 h-6' src="/assets/Icons/Frame-3.png" alt="" />
                        <p><span className="font-bold">Email :</span> {job.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className='w-6 h-6' src="/assets/Icons/Frame-4.png" alt="" />
                        <p className=" py-2"><span className="font-bold">Address :</span> {job.location}</p>
                    </div>

                    <button onClick={() => handleJobData(job._id)} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 mt-8 w-full rounded text-white font-semibold">Apply Now</button>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;