import { useParams,Link  } from "react-router-dom"
import useFetch from "../useFetch"
import { useUtls } from "./useUtls";

const Details=()=>{

    const prodId = useParams()

    const {data,loading,error} = useFetch(`https://electro-kart-backend.vercel.app/electronics/${prodId.id}`)

    const { cart, list, cartHandler, listHandler } = useUtls();

    console.log(cart)

    return(
        <div className="bg-secondary-subtle min-vh-100 ">
             <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success   pe-4"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
             </header>
             {loading && <h1 className="display-1 text-center py-5">Loading... </h1>}
             { !loading &&  data &&  <div className="px-4 py-2">
                 <div className="card mx-2 my-4 py-3">
                       <div className="row">
                        <h1 className="display-2 pb-4 text-center">Product Details</h1>
                        <div className="col-md-4">
                             <img src={data.Img} alt="image" className="img-fluid" style={{maxHeight:"400px",objectFit:"contain"}} />
                             <div className="d-flex flex-column flex-sm-row justify-content-center mt-3" style={{padding:"30px"}}>
                                <button className="btn btn-warning mb-2 mb-sm-0 me-sm-2" onClick={()=>cartHandler(data)} >{cart.find((ct)=>ct.Title==data.Title)?"Remove from the Cart":"Add to the Cart"}</button>
                                <button className="btn btn-primary" onClick={()=>listHandler(data)} >{list.find(l=>l.Title==data.Title)?"Remove from the Wishlist":"Save to the Wishlist"}</button>
                             </div>
                        </div>
                        <div className="col-md-8 px-4">
                               <strong>Title: </strong>{data.Title} <br /> 
                               <strong>Price: </strong>{data.Price} <br /> 
                               <strong>Color: </strong>{ data.Color && <p>{data.Color.join(", ")}</p>} 
                               <strong>Highlights: </strong>{data.Highlights && <p>{data.Highlights.join(", ")}</p>} 
                               <strong>Seller: </strong>{data.Seller} <br /> 
                               <strong>Description: </strong>{data.Description} <br /> 
                               <strong>Specifications: </strong>  <ul>
                                       {data.Specifications &&
                                        Object.entries(data.Specifications).map(([key, value]) => (
                                        <li key={key}>
                                        <strong>{key}:</strong> {value}
                                        </li>
                                        ))}
                                       </ul> 
                               <strong>Rating: </strong>{data.Rating} <br /> 
                               <strong>Categories: </strong>{data.Categories && <p>{data.Categories.join(", ")}</p>} 
                        </div>
                  </div>
                 </div>
             </div>}
        </div>
    )
}



export default Details