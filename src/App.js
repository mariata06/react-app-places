import React, {useState} from 'react';
import Menu from './Menu';
import Countries from './Countries';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))];
const allCountries = ['all',...new Set(items.map((item) => item.country))];
// console.log(allCategories);


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [countries, setCountries] = useState(allCountries);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  const filterCountry = (country) => {
    if (country === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.country === country);
    setMenuItems(newItems);
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
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
