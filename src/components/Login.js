import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'

function Login({ setCurrentUser}) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    .then(r=>r.json())
    .then(user => {console.log(user)
      setCurrentUser(user)
      history.push('/medicines')
    })
      // .then(res => {
      //   if (res.ok) {
      //     res.json().then(user => {
      //       setCurrentUser(user)
      //       history.push('/medicines')
      //     })
      //   } else {
      //     setCurrentUser({ username: "Couldnt Login" })
      //     history.push('/medicines')
      //     res.json().then(errors => {
      //       console.error(errors)
      //     })
      //   }
      // })
  }
  // const handleDeleteUserAccount=(event)=>{
  //   event.preventDefault()

  //   fetch(`http://localhost:3000/users/${currentUser.id}`, {
  //     method: "DELETE"
  //   })
  //   .then(r => r.json())
  //   .then(whoDeleted => { console.log("User Deleted", whoDeleted)
  //    setCurrentUser({})

  //   })
  // }
  return (
    <div className="authForm">
      {/* <Redirect to="/" /> */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>
          <label 
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p><button type="submit">Log In</button></p>
        {/* <p><button onClick={handleDeleteUserAccount}>Delete your Account</button></p> */}
        <p>-- or --</p>
        <p><Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login