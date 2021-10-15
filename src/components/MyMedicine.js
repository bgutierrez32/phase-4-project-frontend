import { useEffect, useState } from "react"
import MyMedicineList from "./MyMedicineList"

function MyMedicine({currentUser}){

    const [myMedicine, setMyMedicine] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/user_medicines')
        .then(r => r.json())
        .then(fetchMyMedicine => {console.log(fetchMyMedicine)
            setMyMedicine(fetchMyMedicine)
        })

    }, [])

    // const handleMyMedicines=()=>{

    //     fetch(`http://localhost:3000/user_medicines/${currentUser.id}`,{
    //         method: "PATCH",
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify({purchased: true})
    //     })
    //     .then(r => r.json())
    //     .then()
    // }

    return(<div>
    <h1>My Medicine</h1>
        <MyMedicineList
                    myMed={myMedicine}
        />
    
    </div>)
}
export default MyMedicine