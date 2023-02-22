import React, { useState} from 'react';
import Slider from './Slider';

const Place = ({ place_idx, places }) => {
    const {name, info} = places[place_idx];
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='place-item'>
            {/* <img src={image} alt={name} className='photo' /> */}
            <Slider place_idx={place_idx} places={places}/>
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