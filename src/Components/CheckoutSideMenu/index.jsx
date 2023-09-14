import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"
import { totalProductsPrice } from "../../utils"

const CheckoutSideMenu = () =>  {
  const {isCheckoutSideMenuOpen, clouseCheckoutSideMenu, cartProducts, setCartProducts, orderData, setOrderData, setSearchByTitle} = useContext(ShoppingCartContext)

  const deleteProduct = (id) => {
    const keepProducts = cartProducts.filter((element) => element.id !== id)
    setCartProducts(keepProducts)
  }

  const saveOrder = () => {
    const date = new Date()
    let id = orderData.length > 0 ? orderData[orderData.length - 1].id + 1 : 1

    const orderToAdd = {
      id: id,
      date: date.toLocaleDateString(),
      products : cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalProductsPrice(cartProducts)
    }
    
    setOrderData([...orderData, orderToAdd])
    setCartProducts([])
    clouseCheckoutSideMenu()
    setSearchByTitle("")
  }

  return(
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 top-[72px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button
          onClick={()=> clouseCheckoutSideMenu()}
        >
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </button>
      </div>
      <div className="overflow-y-auto flex-1">
        {cartProducts.map(product => 
        <OrderCard key={product.id} data={product} deleteProduct={deleteProduct}/>
        )}
      </div>
      <footer className="px-6 mb-6">
        <p className="flex justify-between items-center mt-4 mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalProductsPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="w-full bg-black text-white py-3 rounded-lg" onClick={() => saveOrder()}>Checkout</button>
        </Link>
        
      </footer>
    </aside>
  )
}

export {CheckoutSideMenu}