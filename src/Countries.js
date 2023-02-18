import React from 'react'

export const Countries = ({ countries, filterCountry }) => {
  return (
    <div className='btn-container contries'>
        {/* <button className='filter-btn btn' onClick={() => filterItems('beach')}>beach</button> */}
        {/* <button className='filter-btn btn' onClick={() => filterItems('all')}>all</button> */}
        {countries.map((country, index) => {
            return (
                <button 
                    type="button"
                    className='filter-btn btn' 
                    key={index} 
                    onClick={() => filterCountry(country)}
                >
                    {country}
                </button>
            );    
        })}
    </div>
  );
};

export default Countries;