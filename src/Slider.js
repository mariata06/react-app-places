import React, {useEffect, useState} from 'react'
// import { items } from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({place_idx, places}) => {
    const [ index, setIndex ] = useState(0); 
    // const [ idx, setIdx ] = useState(place_idx);
    // const { image, name } = items[place_idx];
    const { image, name } = places[place_idx];

    // console.log(place_idx);
    // console.log(items[0]);
    // console.log(items[0].image[0]);

    const checkNumber = (number) => {
        if (number > image.length - 1) {
            return 0;
        }
        if (number < 0) {
            return image.length - 1;
        }
        return number;
    }

    const nextImage = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevImage = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    return (
        <div className='slider-img'>
            <div className='img-container'>
                <img src={image[index]} alt={name} className="place-img"/>
            </div>
            <div className='btn-container'>
                <button className='slider-prev' onClick={prevImage}>
                    <FaChevronLeft />
                </button>
                <button className='slider-next' onClick={nextImage}>
                    <FaChevronRight />
                </button>
            </div>        
        </div>
    )
}

export default Slider;