import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  
  const [count, setCount] = useState(0);
  
  
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchJobs();
  },[])
  
  
  if (loading) {
    return <section className='section loading'>
      <h1>
        loading...
     </h1>
    </section>
  }
 
  const { company, title, duties, dates } = jobs[count]; 
  
  return <section className='section'>
    <div className="title">
      <h2>expierence</h2>
      <div className="underline"></div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item,index) => {
            return <button onClick={()=>setCount(index)}   key={item.id} className={`job-btn ${index===count && `active-btn`}`}>
              {item.company}
            </button>
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,index) => {
            return <div key={index} className="job-desc">
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
          })}

        </article>
      </div>
   </div>
  </section>
}

export default App
