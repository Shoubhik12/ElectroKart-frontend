import { useContext } from "react"
import { useState,useEffect, createContext } from "react"

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
             addCart([...cart,value])
        }
        else{
            addCart(cart.filter(prod=>prod.Title!=value.Title))
        }
    }

    const listHandler=(value)=>{
        const exist = list.find(wl=>wl.Title==value.Title)
        if(!exist){
            addList([...list,value])
        }
        else{
            addList(list.filter(wish=>wish.Title!=value.Title))
        }
    }

    return(
        <productContext.Provider value={{cart,list,cartHandler,listHandler}}>
            {children}
        </productContext.Provider >
    )
}

