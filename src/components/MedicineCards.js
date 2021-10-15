function MedicineCards({medicineToRender, handleClick, wentToShoppingCart, currentUser}){
    console.log("In Medicine Card", medicineToRender)

    const handleAddToCart = () => {
        console.log("Handle Add To Cart")
        // handlePostMed()
        handleClick(medicineToRender)
    }

    // const handlePostMed=()=>{

    //     fetch(`http://localhost:3000/user_medicines/${currentUser.id}`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({purchased: true})
    //       })
    //     .then(r => r.json())
    //     .then(postedMed => {console.log(postedMed)})

    // }


    return(<div className="cardDiv">

        <div className="card">

            <h2 className="MedicineName">{medicineToRender.name}</h2>
            
            <h3 className="MedicinePrice">${medicineToRender.price}</h3>
            <button onClick={handleAddToCart}>{wentToShoppingCart ? "Remove" : "Add To Cart"}</button>

        </div>
           <img  className="image" src={medicineToRender.image}/> 
    </div>)
}
export default MedicineCards