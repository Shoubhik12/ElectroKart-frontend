import { useEffect } from "react";
import { useUtls } from "./useUtls"
import { Link } from "react-router-dom";

const Placed=()=>{
    const {cart,list,cartHandler,listHandler} = useUtls();
    const cartData = JSON.stringify(cart) 
    useEffect(()=>{
         if(cart.length!=0){
             localStorage.setItem("history",cartData)        
         }
    },[])
    cart.map((ct)=>cartHandler(ct))
    return(
        <div className="bg-secondary min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 "  >

                 <div className="card shadow-lg p-4 p-sm-5 w-100" style={{maxWidth:"600px"}} >
                      <h1 className="display-3 text-center pb-4">Order Placed Successfully!</h1>
                      <Link className="d-grid gap-2 col-6 mx-auto btn btn-warning" to="/"  >Browse More</Link>
                 </div>
             
        </div>
    )
}


export default Placed