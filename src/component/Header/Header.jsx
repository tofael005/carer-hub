import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="bg-sky-100">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center px-6 py-2">
                <Link to="/"><h1 className="text-3xl font-bold text-indigo-500">JOB<span className="text-black">Boy</span></h1></Link>
                <span className="md:hidden">
                    {
                        toggle ? <GrFormClose onClick={() => setToggle(!toggle)}> </GrFormClose> : <FiMenu onClick={() => setToggle(!toggle)}></FiMenu>
                    }
                </span>
                <ul className={`transition-all items-center gap-6 flex md:flex-row bg-indigo-500 md:bg-transparent p-4 flex-col absolute md:static w-full  left-0 ${toggle ? "top-[9%]" : "-top-full"}`}>
                    <li className="md:w-[30%] mx-auto text-center flex flex-col md:flex-row gap-6 text-gray-300 md:text-gray-700 font-semibold">
                        <NavLink onClick={()=>setToggle(false)} to="/home" className={({ isActive }) =>
                            isActive ? "active" : ""}>Home</NavLink>
                        <NavLink onClick={()=>setToggle(false)} to="/statistic" className={({ isActive }) =>
                            isActive ? "active" : ""}>Statistic</NavLink>
                        <NavLink onClick={()=>setToggle(false)} to="/appliedjob" className={({ isActive }) =>
                            isActive ? "active" : ""}>Applied Jobs</NavLink>
                        <NavLink onClick={()=>setToggle(false)} to="/blog" className={({ isActive }) =>
                            isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    <li>
                        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-6 rounded-md text-white">Star Applying</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;