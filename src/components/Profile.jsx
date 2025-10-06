import { useState } from "react"


const Profile=()=>{

    const addresses=["Flat No. 204, Green Valley Apartments Lakeview Road, Andheri WestMumbai, Maharashtra – 400058","12, Park StreetNear City Centre Mall Kolkata, West Bengal – 700016","B-45, Sunrise Residency Sector 62, Noida Uttar Pradesh – 201301"]
    const profile = {name:"Shoubhik Ghosh",email:"shoubhikghosh360@gmail.com",phone:8910584697}
    const [address,setAddress] = useState(addresses[0]) 

    return(
        <div className="bg-secondary-subtle py-4" style={{height:"1000px"}}>
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
                      <button className="d-grid gap-2 col-6 mx-auto btn btn-warning " onClick={()=>alert("Order placed Successfully.")}>Check Out</button>
                   </li>
               </ul>
            </div> 
        </div>
    )
}


export default Profile