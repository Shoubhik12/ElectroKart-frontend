import { useState } from "react"
import { useUtls } from "./useUtls"
import { Link } from "react-router-dom"
import {  toast } from 'react-toastify';

const Cart=()=>{

    const {cart,list,cartHandler,listHandler} = useUtls()
  
    const quantities = cart.map((ct)=>({id:ct._id,quant:1}))
    console.log(quantities)
    const [quantity,setQuantity] = useState(quantities)

    const addQuantity=(ct)=>{
        toast.success("Quantity Increased.")
        setQuantity((prev)=>prev.map((p)=>p.id==ct._id?{...p,quant:p.quant+1}:p))
    }

     const decreaseQuantity=(ct)=>{
        toast.info("Quantity Decreased.")
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
        <div className="bg-secondary-subtle min-vh-100  " >
               <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success pe-4 d-flex flex-wrap justify-content-between align-items-center"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
                     
                </header>
              <h1 className="display-3 text-center ">My Cart</h1>
              <div className=" container ">
                   <div className="row g-4">
                       <div className="col-12 col-lg-7">
                       {
                         cart.map((ct)=><div className="card shadow-sm py-4">
                              <img src={ct.Img} className="py-3 my-2" alt="Img" style={{objectFit:"contain",maxHeight:"180px"}} />
                              <div className="container px-4">
                                  <p className="fw-medium">{ct.Title}</p>
                                  <h4>$ {ct.Price}</h4>
                                  <p className="fw-normal" >Quantity:  {quantity.find(qt=>qt.id==ct._id).quant} <button className="btn btn-outline-success" onClick={()=>decreaseQuantity(ct)} >-</button> <button className="btn btn-outline-success" onClick={()=>addQuantity(ct)} >+</button> </p>
                                  <button className="btn btn-danger  my-2" onClick={()=>cartHandler(ct)}  >Remove From Cart</button>
                                  <button className="btn btn-outline-secondary mx-2  my-4 " onClick={()=>listHandler(ct)}  >Add To Wishlist</button>
                              </div>
                         </div>)
                       }
                   </div>
                   <div className="col-12 col-lg-5">
                         <div className="card shadow-sm p-4">
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
        </div>
    )
}


export default Cart