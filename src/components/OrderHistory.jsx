

const OrderHistory=()=>{
    const cartData = localStorage.getItem("history")
    const data = !cartData?[]:JSON.parse(cartData)
    console.log(data)
    return(
        <div className="bg-secondary"  style={{height:"1000px"}}>
             <div className="px-4 py-4 ">
                <h1 className="display-3   text-center">Order History</h1>
                <div className="d-flex justify-content-center">
                     <ul className="list-group" style={{width:"800px"}}>
                     {
                        data.map((dt)=>
                            <li className="list-group-item "><strong style={{width:"100px"}}>Title:</strong>{dt.Title} <br />  <strong  >Price:</strong>{dt.Price}     <span className="px-3"><strong>Date:</strong>{new Date().toLocaleDateString()}</span> </li>
                        )
                     }
                    </ul>
                </div>
             </div>
        </div>
    )
}


export default OrderHistory