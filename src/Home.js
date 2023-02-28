import React, {useState} from 'react';
import Places from './Places';
import Countries from './Countries';
import Categories from './Categories';
import { items } from './data';

const Home = () => {
    const allCountries = ['all',...new Set(items.map((item) => item.country))];
    const allCategories = ['all',...new Set(items.map((item) => item.category))];

    const [placeItems, setPlaceItems] = useState(items);
    const [countries, setCountries] = useState(allCountries);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        
        if (category === 'all') {
        setPlaceItems(items);
        return;
        }
        const newItems = items.filter((item) => item.category === category);
        setPlaceItems(newItems);
    }

    const filterCountry = (country) => {
        if (country === 'all') {
        setPlaceItems(items);
        return;
        }
        const newItems = items.filter((item) => item.country === country);
        setPlaceItems(newItems);
    }

    return (
        <section className='section home container'>
            <div className='title'>
                <h2>my places</h2>
                <div className='underline'></div>
            </div>
            <Countries countries={countries} filterCountry={filterCountry} />
            <Categories categories={categories} filterItems={filterItems} />
            <Places places={placeItems}/>
        </section>
    );
};

export default Home;