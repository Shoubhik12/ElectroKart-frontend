import { useUtls } from "./useUtls"
import { Link } from "react-router-dom"

const WishList=()=>{
    const {cart,list,cartHandler,listHandler} = useUtls()

   

    return(
        <div className="bg-secondary-subtle " style={{height:"100%"}}>
            <header className="bg-success-subtle px-4 py-3" >
                     <h3 className="text-success   pe-4"><a className="link-offset-2 link-success link-underline link-underline-opacity-0" href="/">ElectroKart</a>  <span className="float-end"><Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/profile" ><img className="px-2 py-2" src="https://img.icons8.com/?size=30&id=7820&format=png" alt="prof" /> </Link>   <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/cart"  ><img src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373" alt="cart" /> {cart.length}</Link>  <Link className="link-success link-offset-2 link-underline link-underline-opacity-0" to="/wishlist" > <img  src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373" alt="wlist" /> {list.length}</Link> </span> </h3>  
            </header>
               <div className="text-center">
                  <h1 className="display-4">My Wishlist</h1>
                  <div className="row px-4">
                      {
                          list.map((lt)=><div className="col-md-4 px-3 py-3">
                              <div className="card">
                                   <img src={lt.Img} alt="Img" width="400px" height="300px" />
                                   <p className="fw-medium">{lt.Title}</p>
                                   <h4>${lt.Price}</h4>
                                   <button className="btn btn-danger mx-3 my-2" onClick={()=>listHandler(lt)} >Remove from the Wishlist </button>
                                   <button className="btn btn-secondary mx-3 mb-3" onClick={()=>cartHandler(lt)}>Add to the Cart</button>
                              </div>
                          </div>)
                      }
                  </div>
               </div>
        </div>
    )
}


export default WishList