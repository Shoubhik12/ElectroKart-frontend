import { Link } from "react-router-dom"
import { useUtls } from "./useUtls"

const OrderHistory=()=>{
    const cartData = localStorage.getItem("history")
    const data = !cartData?[]:JSON.parse(cartData)
    console.log(data)
    const { cart, list, cartHandler, listHandler } = useUtls();
    return(
        <div className="bg-secondary-subtle min-vh-100"  style={{maxHeight:"1000px"}}>
             <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success pe-4 d-flex flex-wrap justify-content-between align-items-center"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
                     
            </header>
             <div className="container py-4 " >
                <h1 className="display-3   text-center">Order History</h1>
                <div className="d-flex justify-content-center  ">
                     <ul className="list-group " style={{width:"800px"}}>
                     {
                        data.map((dt)=>
                            <li className="list-group-item "><strong style={{width:"100px"}} className="pe-2">Title:</strong>{dt.Title} <br />  <strong className="pe-2" >Price:</strong>{dt.Price}     <span className="px-3"><strong className="pe-2">Date:</strong>{new Date().toLocaleDateString()}</span> </li>
                        )
                     }
                    </ul>
                </div>
             </div>
        </div>
    )
}


export default OrderHistory