import { CalendarIcon, ShoppingBagIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdesCard = ({product}) => {
  return (
    <article className='flex justify-between items-center border border-black rounded-lg mb-4 p-2 gap-2'>
      <div className="flex w-full flex-col gap[6px]">
        <p className="flex gap-2">
          <CalendarIcon className=" w-5 h-5 text-black"/>
          <span className=" font-light">{product.date}</span>
        </p>
        <p className="flex gap-2">
          <ShoppingBagIcon className=" w-5 h-5 text-black"/>
          <span className=" font-light">{product.totalProducts > 1 ? `${product.totalProducts} articles`: 'article'}</span>
        </p>
      </div>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${product.totalPrice}</span>
          <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer"/>
        </p>
    </article>
  )
}

export { OrdesCard }