import React, { useEffect, useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
    
  }, [])
  
  
  return <main>
    <div className='container'>
      <h3>Questions And Answers</h3>
      <section className="info">
       {user.map((question) => {
      const { id } = question;
      return <SingleQuestion key={id}  {...question} />
    })}
      </section>
    </div>
    
  </main>
  
}

export default App;
