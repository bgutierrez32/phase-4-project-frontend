import { useEffect, useState } from "react"
import MedicineCards from "./MedicineCards"

function MedicineContainer({medicineToMap, alertMedicine, currentUser}){
    console.log(medicineToMap)

    // const [medicine, setMedicine] = useState([])

    // const [cart, setCart] = useState([])

    // useEffect(() =>{
    //     fetch("http://localhost:3000/medicines")
    //     .then(r => r.json())
    //     .then(fetchMedicine => {console.log("In UseEffect", fetchMedicine)
    //         setMedicine(fetchMedicine)
    //         // setCart(fetchMedicine)
    //     })

    // }, [])

    // const MedicineWasClicked = (clickedMedicine) => {
    //     const medicineToCart = medicine.indexOf(clickedMedicine);
    //     console.log("clicking!!", medicineToCart)

    //     let medicineFound = cart.find(eachMedicineInCart => eachMedicineInCart.id === clickedMedicine.id)
    //     if(medicineFound){
    //         setCart([...cart, clickedMedicine])
    //     }
    // }

    return (
    <div>
        {
        medicineToMap.map(eachMedicine => {
        console.log("In Medicine list", eachMedicine)

        return (
            <MedicineCards
                        key={eachMedicine.id}
                        medicineToRender={eachMedicine}
                        handleClick={alertMedicine}
                        currentUser={currentUser}
            />
        )
    })}

    </div>)
}
export default MedicineContainer