import Input from "./Input";
import { useState ,useEffect, useCallback} from "react";
import P from "./P";
import B from "./B";
function App() {


  
  const [o,setObj] = useState([1,2])

  const handleClick = useCallback(()=>console.log(o.length),[o.length])


  return (
  <div>
    <Input val={input} setVal={setInput}></Input>
    <B obj={o} setObj={setObj}></B>
    <P handleClick={handleClick}></P>

  </div>
   
  );
}

export default App;
