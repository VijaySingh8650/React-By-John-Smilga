import text from "./data";
import './App.css';
import { useState } from "react";
console.log(text.length);

function App() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      let amount = parseInt(value);
      
      if (value > 9) {
        // console.log(typeof value);
        amount = 9;
        return setData(text.slice(0, amount));
      }
      
      return setData(text.slice(0, amount));
    }, 2000);

    // console.log(value);
    
  }

  return (
    <div className="App">
      <section className="section-center">
        <h3>tired of boring lorem ipsum</h3>
        <form action="" className="lorem-form">
          <label htmlFor="amount">Paragraphs:</label>
          <input id="amount" onChange={handleChange} type="number" name="" />
          <button disabled={value<=0} onClick={handleClick}  className="btn">Generator</button>
        </form>
        {
        loading?<div className="spinner"></div>: data?.map((item,index) => {
          return <p key={index}>{item}</p>
        })
      }
     </section>
      
     
      
    </div>
  );
}

export default App;
