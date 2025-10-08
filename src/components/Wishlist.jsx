import { useUtls } from "./useUtls"

const WishList=()=>{
    const {cart,list,cartHandler,listHandler} = useUtls()

   

    return(
        <div className="bg-secondary-subtle py-5" style={{height:"100%"}}>
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