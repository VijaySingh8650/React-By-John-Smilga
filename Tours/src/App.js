import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import "./App.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'



function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
 
  const fetchData = async () => {
    setLoading(true);


    try {
      
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }

  }

  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
 }

  useEffect(() => {
    fetchData();
  }, [])

  function refresh() {
    return fetchData();
  }

  return <main>
    {loading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} refresh={ refresh} />}
  </main>
}

export default App
