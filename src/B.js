const B = ({obj,setObj})=>{
           return(
            <p onClick={()=>setObj([...obj,2])}>{obj.length}</p>
            )
}

export default B