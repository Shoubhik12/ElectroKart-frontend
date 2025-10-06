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
            <header className="bg-success-subtle px-4 py-3">
                     <h3 className="text-success  py-2 pe-4">ElectroKart  <span className="float-end"><Link className="link-success" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success" to="/cart"  >C {cart.length}</Link>  <Link className="link-success" to="/wishlist" > W {list.length}</Link> </span> </h3>  
                     <input type="text"  className="form-control" placeholder="Search" onChange={(event)=>setSearch(event.target.value)} />
            </header>
            <main className="row bg-secondary-subtle px-4 py-5">
                 <div className="col-md-3"  >
                     <div>
                         <h4 className="text-primary">Filters</h4>
                         <button className="btn btn-danger" onClick={resetFilters} >Reset</button>
                         <br /><br />
                         <h4>Price</h4>
                         <input type="radio" value={10000} name="price" onChange={(event)=>setPrice(Number(event.target.value))} />$10,000 <span></span>
                         <input type="radio" value={50000} name="price" onChange={(event)=>setPrice(Number(event.target.value))} />$50,000 <span></span>
                         <input type="radio" value={100000} name="price" onChange={(event)=>setPrice(Number(event.target.value))} />$100,000
                         <br /><br />
                         <h4>Rating</h4>
                         <input type="radio" value={10} name="rating"  onChange={(event)=>setRating(event.target.value)} />10 <br /> 
                         <input type="radio" value={8} name="rating"  onChange={(event)=>setRating(event.target.value)} />8 <br />
                         <input type="radio" value={4} name="rating"  onChange={(event)=>setRating(event.target.value)} />4 <br />
                         <input type="radio" value={1} name="rating"  onChange={(event)=>setRating(event.target.value)} />1
                         <br /><br />
                         <h4>Sort By</h4>
                         <input type="radio" value="low" name="sort" onChange={(event)=>setSort(event.target.value)} />Low to High <br />
                         <input type="radio" value="high" name="sort" onChange={(event)=>setSort(event.target.value)} />High to Low
                     </div>
                 </div>
                 <div className="col-md-9" >
                     <h4 className="text-success text-center">Products</h4>
                     <div className="row">
                         {
                            products.map(pr=><div  className="col-md-6 px-3 py-3">
                                  <div className="card"    >
                                      <img src={pr.Img} className="py-2" alt="pr" height="200px" />
                                      <div className="py-2 px-2">
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