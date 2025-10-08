import { useEffect, useState } from "react"
import useFetch from "../useFetch"
import { Link, useParams } from "react-router-dom"
import { useUtls } from "./useUtls";

const Landing=()=>{
    const product = useParams()
    const {data,loading,error} = useFetch(`https://electro-kart-backend.vercel.app/electronics/cat/${product.cat}`)
    const [search,setSearch] = useState("")
    const [rating,setRating] = useState(1)
    const [price,setPrice] = useState(0)
    const [sort,setSort] = useState("")
    let products=[]

    const { cart, list, cartHandler, listHandler } = useUtls();
    const resetFilters = ()=>{
        setSearch("")
        setRating(1)
        setPrice(0)
        setSort("")
        window.location.reload()
    }

    if(!loading ){
         products =  data.filter(pr=>search==""?true:pr.Title.includes(search)).filter(pr=>pr.Price>=price).filter(pr=>pr.Rating>=rating)
         if(sort=="low"){
             products.sort((a,b)=>a.Price-b.Price)
         }
         else if(sort=="high"){
             products.sort((a,b)=>b.Price-a.Price)
         }
 
    }


 

    return(
        <div >
            <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success   pe-4"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
                     <input type="text"  className="form-control" placeholder="Search" onChange={(event)=>setSearch(event.target.value)} />
            </header>
            <main className="row bg-secondary-subtle px-4 mx-0 py-5"  style={{height:"100%",marginLeft:"10px",width:"1520px"}} >
                 <div className="col-md-3 card bg-info-subtle  " style={{height:"500px",marginTop:"55px"}}  >
                     <div className="px-2 py-2 " >
                         <h4 className="text-primary">Filters   <button className="btn btn-danger float-end" onClick={resetFilters} >Reset</button></h4>         
                         <br /><br />
                         <h4>Price</h4>
                         0<input type="range" min={0} max={100000} name="price" onChange={(event)=>setPrice(Number(event.target.value))} />100,000 <br /><br />
                         <h4>Rating</h4>
                         0<input type="range" min={0} max={10} name="rating"  onChange={(event)=>setRating(event.target.value)} />10 <br /><br />
                         <h4>Category</h4>
                         <p>{product.cat}</p>
                         <h4>Sort By</h4>
                         <input type="radio" value="low" name="sort" onChange={(event)=>setSort(event.target.value)} />Low to High <br />
                         <input type="radio" value="high" name="sort" onChange={(event)=>setSort(event.target.value)} />High to Low
                     </div>
                 </div>
                 <div className="col-md-9  " >
                     <h4 className="text-success text-center">Products({products.length})</h4>
                     <div className="row">
                         {
                            products.map(pr=><div  className="col-md-6 px-3 py-3">
                                  <div className="card"    >
                                      <img src={pr.Img} className="py-4 " alt="pr" height="200px" width="auto" style={{objectFit:"contain"}} />
                                      <div className="py-4 px-4">
                                        <p>{pr.Title}</p>
                                        <h5>${pr.Price}</h5>
                                        <p><strong>Rating:</strong> {pr.Rating}</p>
                                        <button className="btn btn-warning"   onClick={()=>cartHandler(pr)} >Add to Cart</button><br /><br />
                                        <button className="btn btn-primary" onClick={()=>listHandler(pr)} >Save to WishList</button><br /><br />
                                        <Link to={`/details/${pr._id}`} className="btn btn-success"   >Details</Link>
                                      </div>
                                  </div>
                            </div>)
                         }
                     </div>
                 </div>
            </main>
        </div>
    )
}


export default Landing