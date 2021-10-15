import './App.css';
import { useEffect, useState } from "react"
import Login from './components/Login';
import EditUser from './components/EditUser'
import MedicineContainer from './components/MedicineContainer'
import MyMedicine from './components/MyMedicine';
import MedicineShoppingCart from './components/MedicineShoppingCart';
import { Switch, Redirect, Route, NavLink, useHistory } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }){

  const history = useHistory()

    const handleLogout = () => {console.log("In handleLogout")
        // fetch("http://localhost:3000/logout", {
        //   method: 'DELETE'
        // })
        //   .then(res => {
        //     if (res.ok) {
        //       setCurrentUser(null)
        //     }
        //   })
       fetch("http://127.0.0.1:3000/logout", {
         method: 'DELETE'
       })
       .then(r => r.json())
       .then(message => {console.log(message)
          setCurrentUser(null)
      })
      //   r.json())
      //  .then(user => {console.log(user)
      //   setCurrentUser(null)
      // })
    }
    const [medicine, setMedicine] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/medicines")
        .then(r => r.json())
        .then(fetchMedicine => {console.log("In UseEffect", fetchMedicine)
            setMedicine(fetchMedicine)
            // setCart(fetchMedicine)
        })

    }, [])

    const MedicineWasClicked = (clickedMedicine) => {
        const medicineToCart = medicine.indexOf(clickedMedicine);
        console.log("clicking!!", medicineToCart)

        let medicineFound = cart.find(eachMedicineInCart => eachMedicineInCart.id === clickedMedicine.id)
        if(!medicineFound){
            setCart([...cart, clickedMedicine])
            // setMedicine([...medicine.slice(0, medicineToCart), ...medicine.slice(medicineToCart + 1)])
        }
        else{
          console.log("Hey it Was Added", clickedMedicine.name)
        }
    }

    const MedicineRemovedInCart = (clickedMedicine) => {
      let filterMedicine = cart.filter(eachMedicineInCart => eachMedicineInCart.id !== clickedMedicine.id)
        console.log("HELLOO", clickedMedicine)
         setCart([...filterMedicine])
    }
   
    const handleDeleteUserAccount=(event)=>{
      event.preventDefault()
  
      fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: "DELETE"
      })
      .then(r => r.json())
      .then(whoDeleted => { console.log("User Deleted", whoDeleted)
       setCurrentUser({})
       history.push('/login')
      })
      
    }

   return(
    <div className="App">
      <nav>
        <span>
          <NavLink to="/MyMedicine" exact>
            <button style={{color: "rgb(90, 90, 196)"}}>My Medicine</button>
            </NavLink>{"  "}
          <NavLink to="/medicines" exact>
            <button style={{color: "rgb(90, 90, 196)"}}>Medicine</button>
            </NavLink>{"  "}
          <NavLink to="/MedicineShoppingCart" exact>
            <button style={{color: "rgb(90, 90, 196)"}}>Shopping Cart</button>
          </NavLink>{"    "}
          <NavLink to="/Edit">
            <button style={{color: "blue"}}>Edit</button>
          </NavLink>{"    "}
          
          
        </span>
        <span>Logged in as {currentUser.username} <button style={{color: "green"}} onClick={handleLogout}>Logout</button></span>

          <NavLink to="/login">
          <button style={{color: "red"}} onClick={handleDeleteUserAccount}>Delete Account</button>
          </NavLink>
        
      </nav>
      <Switch>
        <Route path="/medicines">
          <MedicineContainer currentUser={currentUser} 
                              medicineToMap={medicine}
                              alertMedicine={MedicineWasClicked}
          />
        </Route>
        <Route path="/MyMedicine">
          <MyMedicine/>
        </Route>
        <Route path="/MedicineShoppingCart">
          <MedicineShoppingCart currentUser={currentUser} 
                                alertMedicine={MedicineRemovedInCart}
                                medicineToCartMap={cart}
          />
        </Route>
        {/* <Route path="/login">
          <Login/>
        </Route> */}
        <Route path="/Edit">
          <EditUser
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
          />
        </Route>
        
        <Redirect to="/login" />
      </Switch>
    </div>

   )
}
export default AuthenticatedApp;