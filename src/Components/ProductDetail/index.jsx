import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () =>  {
  const {isProductDetailOpen, clouseProductDetail, productToShow} = useContext(ShoppingCartContext)
  
  return(
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 top-[72px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button
          onClick={()=> clouseProductDetail()}
        >
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </button>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={productToShow.image} alt={productToShow.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-ligth text-sm">{productToShow.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail}