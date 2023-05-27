import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../component/Featured/Card';
import { useDataGlobally } from '../Context';
import CategoryCard from '../component/Category/CategoryCard';

const Home = () => {
    const { cards, category } = useDataGlobally();

    const [cardCount, setCardCount] = useState(4)
    const [showBtn, setShowBtn] = useState(true)

    const sliceCard = cards.slice(0, cardCount)



    const showAllJobs = () => {
        setCardCount(cards.length)
        setShowBtn(false)
    }
    return (
        <div>
            <div>
                <section className="grid md:grid-cols-2 max-w-[1240px] mx-auto items-center ">
                    <div className="mt-2 md:mt-20">
                    <h1 className='text-5xl font-bold leading-relaxed'>One Step <br/> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                        <p className="py-6 text-gray-500">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-6 rounded-md text-white font-semibold">Get Started</button>
                    </div>
                    <div>
                        <img className="" src="/assets/All Images/hero.png" alt="" />
                    </div>
                </section>
            </div>




            <div className="mt-24">
                <h1 className="text-4xl py-4 font-bold text-center">Job Category List</h1>
                <p className="text-center text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="my-10 grid md:grid-cols-4 gap-6">
                    {
                        category.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                    }
                </div>
            </div>


            <div>
                <h1 className="text-4xl font-bold text-center mt-24">Featured Jobs</h1>
                <p className="text-center py-4 text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {
                        sliceCard.map(cards => <Card key={cards._id} cards={cards}></Card>)
                    }
                </div>
            </div>

            <div>
                <div className="py-6 ">
                    <button onClick={showAllJobs} className={`bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  rounded-md text-white px-6 py-3 block mx-auto mt-8 my-5 ${showBtn ? "" : "hidden"}`}>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;