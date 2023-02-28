import React, { useState } from 'react';
import { resources } from './data';
import Resource from './Resource';

const Accordion = () => {
    const [resourceItems, setResourceItems] = useState(resources);
    return (
        <section className='section accordion container content'>
            <div className='title'>
                <h2>Useful resources</h2>
                <div className='underline'></div>
            </div>
            <div className='accordion-list'>
                {resourceItems.map((item) => {
                    return (
                        <Resource key={item.name} {...item} />
                    );
                })}
            </div>
        </section>
    );
};

export default Accordion