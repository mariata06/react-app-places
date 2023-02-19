import React from 'react';
import Place from './Place';

const Places = ({ places }) => {
    return (
        <section className='section places center'>
            {places.map((place) => {
                return <Place key={place.id} {...place}></Place>;
            })}
        </section>
    );
};

export default Places;