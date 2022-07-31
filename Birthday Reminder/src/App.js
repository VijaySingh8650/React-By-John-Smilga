import React, { useState } from 'react';
import Button from './Components/Button';
import data from './data';
import List from './Components/List';
function App() {
  const [people, setPeople] = useState([...data]);

  const handleClick = () => {
    setPeople([]);
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List array={people} />
        <Button handleClick={handleClick}>Clear All</Button>
      </section>
    </main>
  )
}

export default App;
