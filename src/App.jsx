import React, {useState} from 'react'

import './App.css'

import Card from './Card'
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
            <div className='main'>
                <Card title="Software Engineer" name="Rod-Invi" age={31} gender="Male"/>
                <Card title="Frontend Developer" name="Rod-design" age={30} gender="Male"/>
                <Card title="Backend Developer" name="Rod-occassion" age={3} gender="Female"/>
                <Card title="Full Stack Developer" name="Rod-Invi" age={28} gender="Male"/>
            </div>
        </>
    )
}

export default App