import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Component/Book';
import array from './Data/array';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';




const book = array.map((ele, index) => {
  
  
  return <Book key={index} {...ele} />
})


// const name = ["Vijay", "Ravi", "Sunita"];
// //name can be rendered 
// const nameOfPeople = name.map((name) => <h1>{name}</h1>);
// console.log(nameOfPeople);
//it is the array of react elements


function  BookList(){
 

    return <div className='container'>
      
      {
       book 
      }
      {/* {
        nameOfPeople
      }
      {name.join(" ")} */}

      {/*array is the array of objects so objects cant be the valid react children, therefore we won't be able to render them */}
      
      
    </div>
 
}



 function Image(props) {
  const { src } = props;
  return <img src={src} alt="book"/>
}


 function BookName(props) {
  return <h1 className='name'>{props.name}</h1>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { Image, BookName };
