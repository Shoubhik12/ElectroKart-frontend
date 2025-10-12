

const OrderHistory=()=>{
    const cartData = localStorage.getItem("history")
    const data = !cartData?[]:JSON.parse(cartData)
    console.log(data)
    return(
        <div className="bg-secondary"  style={{height:"1000px"}}>
             <div className="px-4 py-4">
                <h1 className="display-3 text-center">Order History</h1>
                 <ul className="list-group">
                     {
                        data.map((dt)=>
                            <li className="list-group-item "><strong style={{width:"100px"}}>Title:</strong>{dt.Title} <br />  <strong  >Price:</strong>{dt.Price}</li>
                        )
                     }
                 </ul>
             </div>
        </div>
    )
}


export default OrderHistory