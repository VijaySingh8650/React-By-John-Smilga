import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [dish, setDish] = useState([]);
  const [categories, setCategories] = useState(allCategories);


  function getDish() {
     
    setDish(items);
   }
  useEffect(() => {
    getDish();
  }, [])
  
  function filterItems(category) {
    if (category === "all") {
      return setDish(items); 
    }

    const newItems = items.filter((item) => item.category === category);
    return setDish(newItems);
  }



  return <main>
    <section className="menu section">
      <div className="title">

      <h2>our menu</h2>
      <div className='underline'></div>
      </div>

      <Categories filterItems={filterItems} allCategories={allCategories} />

      <Menu items={dish} />

      
    </section>
  </main>;
}

export default App;
