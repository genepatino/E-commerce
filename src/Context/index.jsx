import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  //Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])
  console.log('Add Products Cart', cartProducts)

  // Product Detail - Open/Clouse
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const clouseProductDetail = () => setIsProductDetailOpen(false)

  //Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider 
    value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        clouseProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
