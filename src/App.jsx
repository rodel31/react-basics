import React, {useState} from 'react'
import './App.css'
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
            <section className='main'>
                <div className='card'>
                    <h1>User Card</h1>
                    <p>Name: RodProject</p>
                    <p>Age: 31</p>
                    <p>Gender: Male</p>
                </div>
                <div className='card'>
                    <h1>User Card</h1>
                    <p>Name: RodProject</p>
                    <p>Age: 31</p>
                    <p>Gender: Male</p>
                </div>
                <div className='card'>
                    <h1>User Card</h1>
                    <p>Name: RodProject</p>
                    <p>Age: 31</p>
                    <p>Gender: Male</p>
                </div>
                <div className='card'>
                    <h1>User Card</h1>
                    <p>Name: RodProject</p>
                    <p>Age: 31</p>
                    <p>Gender: Male</p>
                </div>
            </section>
        </>
    )
}

export default App