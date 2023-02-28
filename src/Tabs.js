import React, {useState} from 'react'
import { info } from './data';

const Tabs = () => {
    const [tabs, setTabs] = useState(info);
    const [value, setValue] = useState(0);
    const { id, title, currency, cities, desc } = tabs[value];

    return (
        <section className='section tabs container content'>
            <div className='title'>
                <h2>Countries Info</h2>
                <div className='underline'></div>
            </div>
            <div className='tabs-container'>
                <div className='tab' key={id}>
                    {/* btn container */}
                    <div className='btn-container'>
                        {tabs.map((item, index) => {
                            return (
                                <button 
                                    key={item.id} onClick={() => 
                                    setValue(index)}
                                    className={`country-btn btn btn--tab ${index === value && 'active-btn'}`}
                                    >
                                    {item.title}
                                </button>
                            );    
                        })}
                    </div>
                    {/* country info */}
                    <article className='country-info'>
                        <h3>{title}</h3>
                        <h3>currency: {currency}</h3>
                        <h3>visited cities: {cities}</h3>
                        <p>{desc}</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Tabs;