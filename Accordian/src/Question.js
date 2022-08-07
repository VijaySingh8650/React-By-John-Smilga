import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [toggle, setToggle] = useState(false);

  const { title, info } = props;



  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        {toggle?<AiOutlineMinus/>:<AiOutlinePlus/>}
      </button>
    </header>
    
    
    <p>{toggle?info:null}</p>
  </article>;
};

export default Question;
