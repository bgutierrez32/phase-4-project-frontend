import { useState } from "react"
import { NavLink } from "react-router-dom"
import MedicineCards from "./MedicineCards"
import MyMedicine from "./MyMedicine"

function MedicineShoppingCart(props){

    //const [shoppingCart, setShoppingCart] = useState([])

    const oneMedicineWasClicked=(clickedMedicine)=>{
        console.log(clickedMedicine)
        props.alertMedicine(clickedMedicine)
    }
    const wentToShoppingCart = true

    const checkOutWasClicked=()=>{
        console.log("It was Click")
        
        props.medicineToCartMap.map(eachMedicine => {console.log(eachMedicine)
        
            patchMyMedicines(eachMedicine)

        })


        // patchMyMedicines()
    }

    const patchMyMedicines=(eachMed)=>{

        fetch(`http://localhost:3000/user_medicines/${eachMed.id}`
        ,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({purchased: true})
        })
        .then(r => r.json())
        .then(patchedMedicine => {console.log(patchedMedicine)
        })
            // props.medicineToCartMap.map(eachMedicine => patchedMedicines(eachMedicine))
        
    }

    return(
        <>
        <h1>Shopping Cart</h1>

        <button onClick={checkOutWasClicked}>Checkout</button>

        {
        props.medicineToCartMap.map(eachMedicine => {
        console.log("In Medicine list", eachMedicine)

        return (
            <MedicineCards
                        wentToShoppingCart={wentToShoppingCart}
                        key={eachMedicine.id}
                        medicineToRender={eachMedicine}
                        handleClick={oneMedicineWasClicked}
            />
        )
    })}
        </>
    )
}
export default MedicineShoppingCart