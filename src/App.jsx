import React, {useState} from 'react'

import './App.css'

import Card from './Card'
const App = () => {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()


    const handleOnChangeUser = (e) =>{
        setUser(e.target.value)
    }
    const handleOnChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <>
            <form action="">
                <label>User: <input type="text" onChange={handleOnChangeUser} value={user} /></label>
                <label>Password: <input type="password" onChange={handleOnChangePassword} value={password} /></label>
                <button type='submit'>Login</button>
            </form>
            <div className='main'>
                <h1>User's Card</h1>
                <Card title="Software Engineer" name="Rod-Invi" age={31} gender="Male"/>
                <Card title="Frontend Developer" name="Rod-design" age={30} gender="Male"/>
                <Card title="Backend Developer" name="Rod-occassion" age={3} gender="Female"/>
                <Card title="Full Stack Developer" name="Rod-Invi" age={28} gender="Male"/>
            </div>
        </>
    )
}

export default App