import { BookName, Image } from "..";


let style = {
    border: "none",
    borderRadius: "5px",
    background: "#617d98",
    color: "white",
    padding:"5px"
}


const handleClick = (name) => {
  alert(`Hello ${name}`);
  

}

export default function Book(props) {
  
  const { src, name } = props;
  return <div  className='box'>
    <Image src={src} />
    <BookName
     name={name.toUpperCase()} />
    <button style={style} type="button" onClick={() => {
      handleClick(name);
    }}>Click Me!</button>
  </div>
}