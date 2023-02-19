import React, { useState} from 'react';

const Place = ({ id, name, image, info }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='place-item'>
            <img src={image} alt={name} className='photo' />
            <div className='place-info'>
                <header>
                    <h4>{name}</h4>
                    <p className='place-text'>{readMore? info: `${info.substring(0, 200)}...`}
                        <button className='read-btn' type="button" onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                </header>
            </div>
        </article>
    );
}

export default Place;