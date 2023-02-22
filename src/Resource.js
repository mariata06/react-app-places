import React, { useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Resource = ( resources ) => {
    const [ showInfo, setShowInfo ] = useState(false);
    const { name, link, desc } = resources;

    return (
        <article className='resource' key={name}>
            <header>
                <a href={link}>
                    <h3>{name}</h3>
                </a>
                <button 
                    className='btn' 
                    onClick={() => 
                    setShowInfo(!showInfo)
                    }
                >
                    {showInfo? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </header>
            {showInfo && <p>{desc}</p>}
        </article>
    );
}

export default Resource;