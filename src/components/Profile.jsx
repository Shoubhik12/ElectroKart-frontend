import { useState } from "react"
import { Link } from "react-router-dom"
import { useUtls } from "./useUtls"

const Profile=()=>{

    const addresses=["Flat No. 204, Green Valley Apartments Lakeview Road, Andheri WestMumbai, Maharashtra – 400058","12, Park StreetNear City Centre Mall Kolkata, West Bengal – 700016","B-45, Sunrise Residency Sector 62, Noida Uttar Pradesh – 201301"]
    const profile = {name:"Shoubhik Ghosh",email:"shoubhikghosh360@gmail.com",phone:8910584697}
    const [address,setAddress] = useState(addresses[0]) 
    const { cart, list, cartHandler, listHandler } = useUtls();
    return(
        <div className="bg-secondary-subtle " style={{height:"1000px"}}>
            <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success   pe-4"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
                     
            </header>
            <div className="px-4 py-4 ">
                <h1 className="display-3 text-center">Profile</h1>
               <ul className="list-group my-4">
                   <li className="list-group-item">Name: {profile.name}</li>
                   <li className="list-group-item">Email: {profile.email}</li>
                   <li className="list-group-item">Phone: {profile.phone}</li>
                   <li className="list-group-item">
                      <select className="form-select"  id="address" onChange={(event)=>setAddress(event.target.value)} >
                           {
                             addresses.map(ad=><option>
                                 {ad}
                             </option>)
                           }
                      </select>
                   </li>
                   <li className="list-group-item">Address: {address}</li>
                   <li className="list-group-item">
                      <Link className="d-grid gap-2 col-6 mx-auto btn btn-warning " to="/placed" >Check Out</Link>
                      <Link className="d-grid gap-2 col-6 mx-auto my-4 btn btn-danger" to="/history"  >History</Link>
                   </li>
               </ul>
            </div> 
        </div>
    )
}


export default Profile