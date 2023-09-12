import { useContext } from "react"
import { OrdesCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

const Orders = () => {
  const { orderData } = useContext(ShoppingCartContext)

  return (
    <div>
      <div className="flex relative justify-center items-center w-80">
        <h1>My Orders</h1>
      </div>
      {orderData?.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdesCard product={order}/>
        </Link>
      ))}
    </div>
  )
}

export {Orders}