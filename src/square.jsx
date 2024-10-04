
 const Square=({value,index,handleClick})=>{
    return (
    <button id="square" onClick={()=>{handleClick(index)}} className=" bg-[#485C60] text-5xl  h-[100px] border-white border-[1px]"> {value}</button>
    )
}
export default Square;