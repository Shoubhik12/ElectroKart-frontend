import { useState } from "react"
import { useUtls } from "./useUtls"
import { Link } from "react-router-dom"


const Cart=()=>{

    const {cart,list,cartHandler,listHandler} = useUtls()
    const quantities = cart.map((ct)=>({id:ct._id,quant:1}))
    console.log(quantities)
    const [quantity,setQuantity] = useState(quantities)

    const addQuantity=(ct)=>{
        setQuantity((prev)=>prev.map((p)=>p.id==ct._id?{...p,quant:p.quant+1}:p))
    }

     const decreaseQuantity=(ct)=>{
        setQuantity((prev)=>prev.map((p)=>p.id==ct._id && p.quant>1?{...p,quant:p.quant-1}:p))
    }

    const totalPrice = cart.reduce((acc,curr)=>{
        const qt = quantity.find(q=>q.id==curr._id)
        return acc+(curr.Price*qt.quant)
    },0)

    const discount = Math.round(Math.random()*10000)
    const charges = 500

    const calculatedPrice = totalPrice-discount+charges


    return(
        <div className="bg-secondary-subtle py-5" style={{height:"1400px"}}>
              <h1 className="display-3 text-center">My Cart</h1>
              <div className="row container px-5 ">
                   <div className="col-md-6 px-2 py-2">
                       {
                         cart.map((ct)=><div className="card px-4 my-4">
                              <img src={ct.Img} className="py-3 my-2" alt="Img" width="200px" height="100px" />
                              <div className="container">
                                  <p className="fw-medium">{ct.Title}</p>
                                  <h4>$ {ct.Price}</h4>
                                  <p className="fw-normal" >Quantity:  {quantity.find(qt=>qt.id==ct._id).quant} <button className="btn btn-outline-success" onClick={()=>decreaseQuantity(ct)} >-</button> <button className="btn btn-outline-success" onClick={()=>addQuantity(ct)} >+</button> </p>
                                  <button className="btn btn-danger  my-2" onClick={()=>cartHandler(ct)}  >Remove From Cart</button>
                                  <button className="btn btn-outline-secondary mx-2  my-4 " onClick={()=>listHandler(ct)}  >Add To Wishlist</button>
                              </div>
                         </div>)
                       }
                   </div>
                   <div className="col-md-6 px-2 py-2">
                         <div className="card px-3 my-4">
                                 <h1 className="display-4 text-center" >Price Details</h1>
                                 <hr />
                                 <p className="px-2" >Price({cart.length} items)  <span className="float-end">${totalPrice}</span></p>
                                 <p className="px-2">Discount <span className="float-end" >-${discount}</span></p>
                                 <p className="px-2">Delivery Charges  <span className="float-end">${charges}</span></p>
                                 <hr />
                                 <h4>Total Amount  <span className="float-end">${calculatedPrice}</span></h4>
                                 <hr />
                                 <p>Amount saved: <span className="float-end"> ${discount}</span></p>
                                 <Link className="btn btn-primary my-4" to="/profile"  >Place Order</Link>
                         </div>
                   </div>
              </div>
        </div>
    )
}


export default Cart