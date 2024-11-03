import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import {useState,useEffect} from "react"

export const ProductCard = ({product}) => {
  const{addToCart,removeFromCart,cartList}=useCart()
  const {name, price, image} = product;
  const[inCart,setinCart]=useState(false)
  useEffect(() => {
   const isinCart=cartList.find(cartItem=>cartItem.id==product.id)
    if(isinCart){
      setinCart(true)
    }else{
      setinCart(false)
    }
  
    
  }, [cartList,product.id])
  
  const handleAdd=()=>{
        addToCart(product)
       
        console.log(product)
        console.log(cartList)
  }



  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {inCart?(<button className="remove" onClick={()=>removeFromCart(product)}>Remove Item</button>):(<button onClick={()=>addToCart(product)} >Add To Cart</button>)}
        {/* /* <button onClick={cartList.find(cartItem=>cartItem.id==product.id)?()=>removeFromCart(product):handleAdd}>{cartList.find(cartItem=>cartItem.id==product.id)?"Remove Item":"Add To Cart"}</button> */} 

      </div>
    </div>
  )
}
