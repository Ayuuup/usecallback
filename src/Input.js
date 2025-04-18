const Input = ({val,setVal})=>{
    return(
        <input value={val} onChange={(e)=>{setVal(e.target.value)}}></input>
    )
}

export default Input