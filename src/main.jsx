import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Landing from "./components/Landing.jsx"
import Details from './components/Details.jsx'
import { UtlsProvider } from './components/useUtls.jsx'
import WishList from './components/Wishlist.jsx'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'
const router = createBrowserRouter([{
  path:"/",
  element:<App />
},{
  path:"landing/:cat",
  element:<Landing />
},{
  path:"/details/:id",
  element:<Details/>
},{
  path:"/wishlist",
  element:<WishList/>
},{
  path:"/cart",
  element:<Cart />
},{
  path:"/profile",
  element:<Profile/>
}])

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <UtlsProvider>
      <RouterProvider router={router} />
    </UtlsProvider>
  </StrictMode>
)
