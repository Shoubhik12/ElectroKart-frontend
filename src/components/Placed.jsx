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
        <div className="bg-secondary " style={{height:"1000px"}} >
             <div className="px-4 py-4"  >
                 <div className="card py-4 px-4" style={{marginTop:"100px"}} >
                      <h1 className="display-3 text-center pb-4">Order Placed Successfully!</h1>
                      <Link className="d-grid gap-2 col-6 mx-auto btn btn-warning" to="/"  >Browse More</Link>
                 </div>
             </div>
        </div>
    )
}


export default Placed