import React from 'react'
// import { items } from './data';

export const Categories = ({ categories, filterItems }) => {
//     const allCategories = ['all',...new Set(items.map((item) => item.category))];
//     const [categories, setCategories] = useState(allCategories);

//     const filterItems = (category) => {
//     if (category === 'all') {
//       setPlaceItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setPlaceItems(newItems);
//   }

    return (
        <div className='btn-container categories'>
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