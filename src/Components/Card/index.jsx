import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const Card = ({data}) => {
  const {count, setCount, openProductDetail, setProductToShow, cartProducts, setCartProducts} = useContext(ShoppingCartContext)

  const showProduct = (product) => {
    openProductDetail()
    setProductToShow(product)
  }

  const addProductsToCart = (product) => {
    setCartProducts([...cartProducts, product])
  }

  return(
    <article className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5">{data.category}</span>
        <img className=" w-full h-full object-cover rounded-lg" src={data.image} alt=""/>
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(e) => {e.stopPropagation(); setCount(count + 1); addProductsToCart(data)}}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">{data.price}</span>
      </p>
    </article>
  )
}

export {Card}