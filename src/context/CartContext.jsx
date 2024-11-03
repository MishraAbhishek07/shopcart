import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer"
const initialState={
    cartList:[],
    total:0

}
const CartContext=createContext(initialState)
export const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(cartReducer,initialState)
     const addToCart=(product)=>{
        const updatedList=state.cartList.concat(product)
        totalvalue(updatedList)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:updatedList
            }
        })
        
        }
     const removeFromCart=(product)=>{
        const updatedList=state.cartList.filter(current=>current.id!==product.id)
        totalvalue(updatedList)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatedList
            }
        })
        
        }
      const totalvalue=(products)=>{
        let total=0
        products.forEach(product=>total=total+product.price)
        dispatch({
            type:"TOTAL_CART_PRICE",
            payload:{
                total
            }
        })
     

      }
    //   const cardItemTotal=

    const value={
        cartList:state.cartList,
        total:state.total,
        addToCart,
        removeFromCart
    }
  
    return (
        <CartContext.Provider value={value}> 
            {children}
        </CartContext.Provider>
    )
}
export const useCart=()=>{
         const context=useContext(CartContext)
         return context
}
