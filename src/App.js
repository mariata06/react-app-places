import React, {useState} from 'react';
import Places from './Places';
import Countries from './Countries';
import Categories from './Categories';
import Tabs from './Tabs';
import { items } from './data';

const allCountries = ['all',...new Set(items.map((item) => item.country))];
const allCategories = ['all',...new Set(items.map((item) => item.category))];

function App() {
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
    <main className="App">
      <section className='section'>
        <div className='title'>
          <h2>my places</h2>
          <div className='underline'></div>
        </div>
        <Countries countries={countries} filterCountry={filterCountry} />
        <Categories categories={categories} filterItems={filterItems} />
        <Places places={placeItems}/>
        <Tabs />
      </section>
    </main>
  );
}

export default App;
