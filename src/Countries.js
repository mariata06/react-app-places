import React from 'react'

export const Countries = ({ countries, filterCountry }) => {
  return (
    <div className='btn-container contries'>
        {countries.map((country, index) => {
            return (
                <button 
                    type="button"
                    className='filter-btn btn btn--country' 
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