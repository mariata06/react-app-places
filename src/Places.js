import React from 'react';
import Place from './Place';

const Places = ({ places }) => {
    return (
        <section className='section places center'>
            {places.map((place, i) => {
                {/* console.log(i) */}
                return <Place key={place.id} place_idx={i} places={places} {...place} ></Place>;
            })}
        </section>
    );
};

export default Places;