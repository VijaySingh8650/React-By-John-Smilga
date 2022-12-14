import React from 'react';
import Tour from './Tour';
const Tours = ({ tours,removeTour, refresh }) => {
    if (tours.length === 0) {
    
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button onClick={refresh} className='btn'>refresh</button>
      </div>
    </main>

  }
  return <section>
    <div className='title'>
      <h2>Ours Tours</h2>
      <div className="underline">

      </div>
    </div>
    <div>
      {tours.map((tour) => {
        
        return <Tour key={ tour.id} {...tour} removeTour={removeTour}></Tour>
      })}
    </div>

  </section>;
};

export default Tours;
