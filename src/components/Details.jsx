import { useParams  } from "react-router-dom"
import useFetch from "../useFetch"
import { useUtls } from "./useUtls";

const Details=()=>{

    const prodId = useParams()

    const {data,loading,error} = useFetch(`https://electro-kart-backend.vercel.app/electronics/${prodId.id}`)

    const { cart, list, cartHandler, listHandler } = useUtls();

    console.log(cart)

    return(
        <div className="bg-secondary-subtle py-5">
             {loading && <p>Loading... </p>}
             { !loading &&  data &&  <div className="card mx-4 py-5">
                  <div className="row">
                        <h1 className="display-2 pb-4 text-center">Product Details</h1>
                        <div className="col-md-4">
                             <img src={data.Img} alt="image" width="500px" height="500px" />
                             <button className="btn btn-warning mx-2 my-2" onClick={()=>cartHandler(data)} >{cart.find((ct)=>ct.Title==data.Title)?"Remove from the Cart":"Add to the Cart"}</button>
                             <button className="btn btn-primary" onClick={()=>listHandler(data)} >{list.find(l=>l.Title==data.Title)?"Remove from the Wishlist":"Save to the Wishlist"}</button>
                        </div>
                        <div className="col-md-8">
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
             </div>}
        </div>
    )
}



export default Details