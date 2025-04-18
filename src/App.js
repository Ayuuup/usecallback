import Input from "./Input";
import { useState ,useEffect, useCallback} from "react";
import P from "./P";
import B from "./B";
function App() {

  const [input,setInput] = useState('')
  const [num1] = useState(4)
  const [num2] = useState(5)
  
  const [o,setObj] = useState([1,2])

  const handleClick = useCallback(()=>console.log(o.length),[o.length])




  //memoize the sum function so that it wouldnt be recreated upon rerenders
  const sum = useCallback(()=>num1+num2,[num1,num2])

  const sum2= ()=>num1+num2

  useEffect(()=>console.log(sum()),[sum])
  return (
  <div>
    <Input val={input} setVal={setInput}></Input>
    <B obj={o} setObj={setObj}></B>
    <P handleClick={handleClick}></P>

  </div>
   
  );
}

export default App;
