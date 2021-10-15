function MyMedicineCard({myMedicineToRender}){
    console.log("In My Medicine Card", myMedicineToRender)

    return(<div className="cardDiv">
        <div className="card">
             <h1 className="MedicineName">{myMedicineToRender.medicine.name}</h1>
        </div>
           <img  className="image" src={myMedicineToRender.medicine.image}/>
    </div>

    )
}
export default MyMedicineCard