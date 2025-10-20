import { useContext } from "react"
import { useState,useEffect, createContext } from "react"
import {  toast } from 'react-toastify';


const productContext = createContext()

export const useUtls=()=> useContext(productContext)

export const UtlsProvider=({children})=>{
    
    const [cart,addCart] = useState(()=>{
            const saved = localStorage.getItem("cart")
            return saved? JSON.parse(saved):[]
     })
    const [list,addList] = useState(()=>{
             const saved = localStorage.getItem("wishlist")
             return saved? JSON.parse(saved):[]
     })

     
    useEffect(()=>{
             localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
     
    useEffect(()=>{
             localStorage.setItem("wishlist",JSON.stringify(list))
    },[list])

    const cartHandler=(value)=>{
        const exist = cart.find((pd)=>pd.Title==value.Title)
        if(!exist){
             toast.success("Item added to the cart.")
             addCart([...cart,value])
        }
        else{
            toast.dark("Item removed from the cart.")
            addCart(cart.filter(prod=>prod.Title!=value.Title))
        }
    }

    const listHandler=(value)=>{
        const exist = list.find(wl=>wl.Title==value.Title)
        if(!exist){
            toast.success("Item added to the wishlist.")
            addList([...list,value])
        }
        else{
            toast.info("Item removed from the wishlist.")
            addList(list.filter(wish=>wish.Title!=value.Title))
        }
    }

    return(
        <productContext.Provider value={{cart,list,cartHandler,listHandler}}>
            {children}
        </productContext.Provider >
    )
}

