import { useState } from "react"
import { useHistory } from "react-router-dom"

function EditUser({currentUser, setCurrentUser}){
console.log(currentUser)
    const [editName, seteditName]= useState('')
    const history = useHistory()

    const handleOnChange=(event)=>{
        
        console.log(event.target.value)
        seteditName(event.target.value)
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault()

        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({username: editName})
        })
        .then(r => r.json())
        .then(userEdit => {console.log(userEdit)
            setCurrentUser(userEdit)
            history.push("/medicines")
        })
    }

    return(
        <>
        <h1>Edit Your Account</h1>
        <form onSubmit= {handleOnSubmit}>
            <input
            type= "text"
            value= {editName}
            onChange= {handleOnChange}
            />
            <label>UserName</label>
            <input
            type="submit"
            />
        </form>
        </>
    )
}
export default EditUser