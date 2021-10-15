import MyMedicineCard from "./MyMedicineCard"

function MyMedicineList(props){
    console.log("My Medicine List PROPS", props)

    const filterMyMed=()=>{
        return(
        props.myMed.filter(eachMyMed =>
            // console.log("WOOBBLYY", eachMyMed)

        eachMyMed.purchased == true)

    )
    }
    let filteredMeds = filterMyMed()

    return(<div>
         {
        filteredMeds.map(eachOfMyMedicine => {
        console.log("In Medicine list", eachOfMyMedicine)

        return (
            <MyMedicineCard
                       key={eachOfMyMedicine.id}
                       myMedicineToRender={eachOfMyMedicine}
            />
        )
    })}
    </div>

    )
}
export default MyMedicineList