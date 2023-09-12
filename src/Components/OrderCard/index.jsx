import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = ({data, deleteProduct}) => {
    return(
        <article className='flex justify-between items-center border p-2 gap-2'>
            {/* <div className='flex items-center'>
            </div> */}
            <div className='flex items-center gap-2 flex-row'>
                <span>{data.quantity}</span>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-fill' src={data.image} alt={data.title}/>
                </figure>
                <p className='text-sm font-light truncate'>{data.title}</p>
                {/* <div className='flex'>
                    <button className='w-5 h-5 border-spacing-1 rounded-sm flex items-center justify-center bg-gray-300'
                        onClick={() => data.quantity + 1}
                    >-</button>
                    <span className='text-sm w-5 h-5 border-spacing-1 rounded-sm flex items-center justify-center'>{data.quantity}</span>
                    <button className='w-5 h-5 border-spacing-1 rounded-sm flex items-center justify-center bg-gray-300'
                        onClick={() => data.quantity - 1}
                    >+</button>
                </div> */}
            </div>
            <div className="flex items-center gap-2">
                <p className='text-lg font-medium'>${data.price * data.quantity}</p>
                {deleteProduct && 
                    <button>
                        <XMarkIcon onClick={() => deleteProduct(data.id)} className="h-6 w-6 text-black cursor-pointer" />
                    </button>
                }
            </div>
        </article>
    )
}

export {OrderCard}