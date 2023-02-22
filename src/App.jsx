import React, {useState} from 'react'


const App = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    const increment = () => {
        setCount(count + 1)
    }

    const handleOnChangeUser = (e) =>{
        setUser(e.target.value)
    }
    const handleOnChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <>
            <div>Count: {count}</div>
            <button onClick={increment}>Like</button>
            <form action="">
                <label>User: <input type="text" onChange={handleOnChangeUser} value={user} /></label>
                <label>Password: <input type="password" onChange={handleOnChangePassword} value={password} /></label>
            </form>
        </>
    )
}

export default App