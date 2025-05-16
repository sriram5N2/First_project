import { useState } from "react";

function OurComponent()
{
    const [count,setCount]=useState(0);
    function handler()
    {
        setCount((prev)=>prev+1);
    }
    return(
    <>
 <h2> Welcome I have also created a same button like you</h2>
 <p> Ok just come and test it </p>
 <p> Number is {count}</p>
 <button onClick={handler}>Click me</button>
 </>)

}


export default OurComponent;