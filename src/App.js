import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log("State Of Current User", currentUser)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {console.log("In useEffect")
    // fetch("http://127.0.0.1:3000/users")
    // .then(r => r.json())
    // .then(console.log)
    // fetch("http://127.0.0.1:3000/me")
    // .then(r => r.json())
    // .then(console.log)
    fetch('http://localhost:3000/me')
    .then(r => r.json())
    .then(user => {console.log(user)
      setCurrentUser(user)
      setAuthChecked(true)
    })

    // fetch('/me', {
    //   credentials: 'include'
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       res.json().then((user) => {console.log(user)
    //         setCurrentUser(user)
    //         setAuthChecked(true)
    //       })
    //     } else {console.log("No user")
    //       setAuthChecked(true)
    //     }
    //   })
      console.log("Fetch Done")
  }, [])

  if(!authChecked) { return <div><h1>Hi</h1></div>}
  return (<>
  <h1 className="header">The Realest Pharmacy 🔌</h1>
    <Router>
      {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />
        )
      }
    </Router>
  </>);
}

export default App;
