import { useState } from "react"
import { Link } from "react-router-dom"
import { useUtls } from "./useUtls"

const Profile=()=>{

    const addresses=["Flat No. 204, Green Valley Apartments Lakeview Road, Andheri WestMumbai, Maharashtra – 400058","12, Park StreetNear City Centre Mall Kolkata, West Bengal – 700016","B-45, Sunrise Residency Sector 62, Noida Uttar Pradesh – 201301"]
    const profile = {name:"Shoubhik Ghosh",email:"shoubhikghosh360@gmail.com",phone:8910584697}
    const [add,setAdd] = useState(false)
    const [val,setVal] = useState("")
    const [addr,setAddr] = useState(["Flat No. 204, Green Valley Apartments Lakeview Road, Andheri WestMumbai, Maharashtra – 400058","12, Park StreetNear City Centre Mall Kolkata, West Bengal – 700016","B-45, Sunrise Residency Sector 62, Noida Uttar Pradesh – 201301"])
    const [address,setAddress] = useState(addr[0]) 
    const [show,setShow] = useState(false)
    const { cart, list, cartHandler, listHandler } = useUtls();

    const Addresshandler=(value)=>{
        const exist =addr.find(ad=>ad==value)
        if(exist){
             setAddr(addr.filter(ad=>ad!=value))
        }
        else{
            setAddr([...addr,value])
        }
    }

    return(
        <div className="bg-secondary-subtle min-vh-100 "   >
             <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success pe-4 d-flex flex-wrap justify-content-between align-items-center"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
                     
                </header>
            <div className="container py-5">
                <h1 className="display-3 text-center mb-4">Profile</h1>
                <div className="row justify-content-center g-4">
                     <div className="col-12 col-md-8 col-lg-6">
                     <ul className="list-group rounded-3 ">
                   <li className="list-group-item">Name: {profile.name}</li>
                   <li className="list-group-item text-break">Email: {profile.email}</li>
                   <li className="list-group-item">Phone: {profile.phone}</li>
                   <li className="list-group-item">
                       <div >
                        <button className="btn btn-info" onClick={()=>setShow(!show)} >Show Addresses</button>  
                        <button className="btn btn-warning float-end px-5" onClick={()=>setAdd(!add)}>Add </button> 
                       </div>
                   </li>
                   {show && <li className="list-group-item">
                       <div className="card">
                            {
                                addr.map(ad=><div className="card-header">{ad}  <div><button className="btn btn-success" onClick={()=>setAddress(ad)} >Select</button>   <button className="btn btn-danger "  onClick={()=>Addresshandler(ad)}>Delete</button></div> </div>)
                            }
                       </div>
                    </li>}
                   {add &&  <li className="list-group-item">
                        <input type="text" id="addr" className="form-control" onChange={(event)=>setVal(event.target.value)}/>
                        <button className="btn btn-primary my-2"  onClick={()=>Addresshandler(val)}>Enter a address</button>
                    </li>}
                   <li className="list-group-item">Address: {address}</li>
                   <li className="list-group-item">
                      <Link className="d-grid gap-2 col-6 mx-auto btn btn-warning " to="/placed" >Check Out</Link>
                      <Link className="d-grid gap-2 col-6 mx-auto my-4 btn btn-danger" to="/history"  >History</Link>
                   </li>
               </ul>
                     </div>
                </div>
            </div> 
        </div>
    )
}


export default Profile