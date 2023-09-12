import { useContext } from "react"
import { PlusIcon, /* CheckIcon */ } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const Card = ({data}) => {

  const {
    count,
    setCount, 
    openProductDetail, 
    clouseProductDetail, 
    setProductToShow, 
    cartProducts, 
    setCartProducts, 
    openCheckoutSideMenu, 
    clouseCheckoutSideMenu,
  } = useContext(ShoppingCartContext)

  const showProduct = (product) => {
    clouseCheckoutSideMenu()
    openProductDetail()
    setProductToShow(product)
  }
 
  const onAdd = product => {
		const productExists = cartProducts.some(el => el.id === product.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = cartProducts.find(el => el.id === product.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
		} else {
			product.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
      setCartProducts([...cartProducts, product])
    }
	};

  const addProductsToCart = (e, product) => {
    e.stopPropagation()
    onAdd(product)
    setCount(count + 1)
    //setCartProducts([...cartProducts, product])
    openCheckoutSideMenu()
    clouseProductDetail()
  }

  /* const renderIcon = (id) => {
    const isProductInCart = cartProducts.some(el => el.id === id)
    if(isProductInCart){
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
        onClick={(e)=> {e.stopPropagation()}}
        >
            <CheckIcon className="h-6 w-6 text-white" />
        </button>
      )
    }else{
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(e)=> addProductsToCart(e, data)}
        >
            <PlusIcon className="h-6 w-6 text-black" />
        </button>
      )
    }
  } */

  return(
    <article className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5">{data.category}</span>
        <img className=" w-full h-full object-cover rounded-lg" src={data.image} alt=""/>
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(e)=> addProductsToCart(e, data)}
        >
            <PlusIcon className="h-6 w-6 text-black" />
        </button>{/* {renderIcon(data.id)} */}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </article>
  )
}

export {Card}