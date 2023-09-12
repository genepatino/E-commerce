import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

const MyOrder = () => {
  const { orderData } = useContext(ShoppingCartContext)
  const params = useParams()
  let id = params.id
  /* const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1) */

    return (
      <>
      <div className="flex relative justify-center items-center w-80 mb-6">
        <Link to='/orders' className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col">
      {orderData?.at(id === undefined ? -1 : id)?.products.map(product => (
        <OrderCard key={product.id} data={product}/>
        ))}
      </div>
      </>
    )
}
  
export {MyOrder}
