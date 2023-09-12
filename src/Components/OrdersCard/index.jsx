const OrdesCard = ({product}) => {
  return (
    <article className='flex justify-between items-center border border-black p-2 gap-2'>
      <p className="flex w-full justify-around">
        <span>{product.totalProducts}</span>
        <span>{product.totalPrice}</span>
        <span>{product.date}</span>
      </p>
    </article>
  )
}

export { OrdesCard }