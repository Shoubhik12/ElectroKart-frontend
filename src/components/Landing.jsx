import { useEffect, useState } from "react"
import useFetch from "../useFetch"
import { Link, useParams } from "react-router-dom"
import { useUtls } from "./useUtls";

const Landing=()=>{
    const product = useParams()
    const [category,setCategory] = useState([])
    useEffect(()=>{
        if(product.cat){
            setCategory([product.cat])
        }
        else{
            setCategory([])
        }
    },[product.cat])
    const categories = ["Smartphone","Mobile","Electronics","Laptop","Computers","Audio","Headphones","Wearables","Smartwatch","Tablet","Entertainment","Camera","Photography","Monitor","Gaming","Home Entertainment"]
    const {data,loading,error} = useFetch(`https://electro-kart-backend.vercel.app/electronics`)
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

    const handleCategoryChange=(cat)=>{
         setCategory((prev)=>prev.includes(cat)? prev.filter(c=>c!=cat):[...prev,cat])
    }

    if(!loading && Array.isArray(data) ){
         products =  data.filter(pr=>search==""?true:pr.Title.includes(search)).filter(pr=>pr.Price>=price).filter(pr=>pr.Rating>=rating).filter(pr=>category.length>0?pr.Categories.some(cat=>category.includes(cat)):true)
         if(sort=="low"){
             products.sort((a,b)=>a.Price-b.Price)
         }
         else if(sort=="high"){
             products.sort((a,b)=>b.Price-a.Price)
         }
 
    }



 

    return(
        <div >
            <header className="bg-success-subtle  px-4 py-3" >
                     <h3 className="text-success input-group   pe-4"><div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-2"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a><input className="form-control" placeholder="Search" onChange={(event)=>setSearch(event.target.value)}   style={{maxWidth:"500px"}}/> <div  className="" ><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link></div> </div>  </h3>  
                     
            </header>
            <main className="container-fluid  row bg-secondary-subtle px-4 mx-0 py-5"   >
                 <div className="col-12  col-md-3 card bg-info-subtle  "  style={{height:"1000px",marginTop:"55px"}} >
                     <div className="px-2 py-2 " >
                         <h4 className="text-primary">Filters   <button className="btn btn-danger float-end" onClick={resetFilters} >Reset</button></h4>         
                         <br /><br />
                         <h4>Price</h4>
                         0 <input type="range" min={0} max={100000} name="price" onChange={(event)=>setPrice(Number(event.target.value))} /> 100,000 <br /><br />
                         <h4>Rating</h4>
                         0 <input type="range" min={0} max={10} name="rating"  onChange={(event)=>setRating(event.target.value)} /> 10 <br /><br />
                         <h4>Category</h4>
                         <ul>{categories.map(cat=><li>{cat} <input type="checkbox"  value={cat} checked={category.includes(cat)} onChange={()=>handleCategoryChange(cat)}   /></li>)}</ul>
                         <h4>Sort By</h4>
                         <input type="radio" value="low" name="sort" onChange={(event)=>setSort(event.target.value)} />  Low to High <br />
                         <input type="radio" value="high" name="sort" onChange={(event)=>setSort(event.target.value)} /> High to Low
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
                                        <p className="px-4">{pr.Title}</p>
                                        <h5 className="px-4">${pr.Price}</h5>
                                        <p className="px-4"><strong>Rating:</strong> {pr.Rating}</p>
                                         <div className="d-flex flex-wrap gap-2  justify-content-center mt-3" >
                                             <button className="btn btn-warning flex-grow-1 flex-md-grow-0 "  style={{ minWidth: "120px" }}   onClick={()=>cartHandler(pr)} >Add to Cart</button> <span></span>
                                             <button className="btn btn-primary flex-grow-1 flex-md-grow-0 "  style={{ minWidth: "120px" }} onClick={()=>listHandler(pr)} >{list.find(lt=>lt.Title==pr.Title)?"Remove from the Wishlist":"Save to WishList"}</button> <br />
                                              <Link to={`/details/${pr._id}`} className="btn btn-success flex-grow-1 flex-md-grow-0"  style={{ minWidth: "120px" }}   >Details</Link>
                                         </div>
                                       
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