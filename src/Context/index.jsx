import { createContext, useState, useEffect } from "react";
import { apiFakeApp } from "../utils/apiUrl"

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
  
  //Get Products
  const [articleData, setArticleData] = useState([])
  const [filteredItems, setFilteredItems] = useState("")
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(apiFakeApp)
        const data = await response.json()
        setArticleData(data)
      } catch (error) {
        console.error(`Oh no, se ha presentado un error: ${error}`)
      }
    }
    fetchData()
  }, [])

  //Get Product by title
  const [searchByTitle, setSearchByTitle] = useState("")

  const filteredItemsByTitle = (articleData, searchByTitle) => {
    return articleData.filter(article => article.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  //Get Product by Category
  const [searchByCategory, setSearchByCategory] = useState([])
  
  const filteredItemsByCategory = (articleData, searchByCategory) => {
    return articleData.filter(article => article.category.toLowerCase().includes(searchByCategory))
  }

  //////////////////////////
  const filterBy = (searchType, articleData, searchByTitle, searchByCategory) => {
    if (!searchType) {
      return articleData
    }

    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(articleData, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(articleData, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(articleData, searchByCategory).filter(article => article.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', articleData, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', articleData, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', articleData, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, articleData, searchByTitle, searchByCategory))
  }, [articleData, searchByTitle, searchByCategory])

  ////////////////////////////

  /* useEffect(()=>{
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(articleData, searchByTitle))
    if(searchByCategory) setFilteredItems(filteredItemsByCategory(articleData, searchByCategory))
  }, [articleData, searchByTitle, searchByCategory]) */

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
        setOrderData,
        articleData,
        setArticleData,
        searchByTitle, 
        setSearchByTitle,
        filteredItems, 
        setFilteredItems,
        filteredItemsByTitle,
        searchByCategory, 
        setSearchByCategory

    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
