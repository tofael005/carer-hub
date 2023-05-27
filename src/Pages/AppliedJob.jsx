import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FinterPage from './FinterPage';


const AppliedJobs = () => {
    const data = useLoaderData()
    const [jobs, setJobs] = useState([])
    const [remote, setRemote] = useState([])

    useEffect(() => {
        setJobs(data)
        setRemote(data)
    }, [])


    const remoteHandler = (type) => {
        const setType = remote.filter(remotes => remotes.jobType === type)
        setJobs(setType)
    }

    return (
        <section className=' mt-[40px]'>
            <h1 className="text-center font-bold text-3xl py-10">Applied job</h1>
            <div className="block ml-auto dropdown dropdown-bottom relative my-10">
                <label tabIndex={0} className="my-btn block text-white font-semibold  w-[100px] ml-auto bg-indigo-400 p-4 text-center rounded-md">
                    Filter
                </label>
                <ul
                    tabIndex={0}
                    className="absolute right-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box md:mb-10 w-52"
                >
                    <li onClick={() => remoteHandler("Remote")}>
                        <a className='border-2 border-b-indigo-600'>Remote</a>
                    </li>

                    <li onClick={() => remoteHandler("Onside")}>
                        <a className='border-2 border-b-indigo-600'>Onsite</a>
                    </li>
                </ul>
            </div>

            
            
            {
                jobs.map((card) => <FinterPage key={card._id} card={card}></FinterPage>)
            }
        </section>
    );
};

export default AppliedJobs;