import { useState } from "react";
import React from "react";

const Card = ({title,name, age, gender})=> {

const [count,setCount]=useState(0)

const increment = () =>{
    setCount(count + 1)
}

    return(
        <>
            <div className='card'>
                <h1>{title}</h1>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <div>
                    <button onClick={increment}>Like</button>
                    <p>{count}</p>
                </div>
            </div>
        </>
    )
}
export default Card