import React from "react";

const Card = ({title,name, age, gender})=> {

    return(
        <>
            <div className='card'>
                <h1>{title}</h1>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
            </div>
        </>
    )
}
export default Card