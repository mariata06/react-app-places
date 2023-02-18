import React, {useState} from 'react';
import Menu from './Menu';
import Countries from './Countries';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [countires, setCountries] = useState([]);

  // console.log(Menu);
  console.log(items);
  
  return (
    <main className="App">
      <section className='section'>
        <div className='title'>
          <h2>my places</h2>
          <div className='underline'></div>
        </div>
        <Countries countires={countires}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
