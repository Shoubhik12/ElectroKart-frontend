import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {Link} from "react-router-dom"

function App() {
  
  const categories = ["Smartphone","Mobile","Electronics","Laptop","Computers","Audio","Headphones","Wearables","Smartwatch","Tablet","Entertainment","Camera","Photography","Monitor","Gaming","Home Entertainment"]

  return (
    <>
      <div className="text-center text-success py-3 bg-success-subtle " >
            <h1 className="display-2" >ElectroKart</h1>
      </div>
      <div className="row bg-secondary-subtle" >
          {
            categories.map((cat)=><div className="col-md-4 px-5 py-5"  >
                <div className="card text-center text-bg-success " style={{height:"200px"}} >
                     <Link className="nav-link" to={`landing/${cat}`}  ><h1 className="display-5 py-5" >{cat}</h1></Link>
                </div>
            </div>)
          }
      </div>
    </>
  )
}

export default App
