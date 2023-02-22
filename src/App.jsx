import React, {useState} from 'react'


const App = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState()

    const increment = () => {
        setCount(count + 1)
    }

    const handleOnChange = (e) =>{
        setUser(e.target.value)
    }


    return(
        <>
            <div>Hello World! {count}</div>
            <button onClick={increment}>Like</button>
            <form action="">
                <label>Name: <input type="text" onChange={handleOnChange} value={user} /></label>
            </form>
        </>
    )
}

export default App