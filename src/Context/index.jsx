import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  //Local Storage - Save initial request

  //Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  //Shooping Cart - Order
  const [orderData, setOrderData] = useState([])

  // Product Detail - Open/Clouse
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const clouseProductDetail = () => setIsProductDetailOpen(false)

  //Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({})

  //Checkout Side Menu - Open/Clouse
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const clouseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  

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
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        clouseCheckoutSideMenu,
        orderData, 
        setOrderData
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
