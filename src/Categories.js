import React from 'react'

export const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container categories'>
        {/* <button className='filter-btn btn' onClick={() => filterItems('beach')}>beach</button> */}
        {/* <button className='filter-btn btn' onClick={() => filterItems('all')}>all</button> */}
        {categories.map((category, index) => {
            return (
                <button 
                    type="button"
                    className='filter-btn btn' 
                    key={index} 
                    onClick={() => filterItems(category)}
                >
                    {category}
                </button>
            );    
        })}
    </div>
  );
};

export default Categories;