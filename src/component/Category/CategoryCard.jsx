import React from 'react';

const CategoryCard = ({category}) => {
    const { category_logo, category_name, jobs_available } = category
    return (
        <div>
            <div className=" mt-10 rounded-md border-2 border-gray-200">
                <div className="bg-slate-200 p-6">
                    <img src={category_logo} alt="" />
                    <p className="text-2xl font-semibold py-4">{category_name}</p>
                    <p className="text-gray-500">{jobs_available}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;