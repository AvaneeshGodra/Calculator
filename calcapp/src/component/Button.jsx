export const Buttons=({val,fn})=>{
    const clicked=()=>{
        fn(val);
    }
    return(<button onClick={clicked} className="btn btn-success mt-3 me-3">{val}</button>)
}