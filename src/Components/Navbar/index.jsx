import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"


const leftNavbarList = [
  {to: '/', name: 'Shopi', className: 'font-semibold text-2xl', isLogo: true},
  {to: '/', name: 'All', className: ''},
  {to: "/women", name: "Women's clothing", className: ''},
  {to: "/men", name: "Men's clothing", className: ''},
  {to: '/jewelery', name: 'Jewelery', className: ''},
  {to: '/electronics', name: 'Electronics', className: ''},
]

const rigthNavbarList = [
  {to: '/my-order', name: 'My Order', className: ''},
  {to: '/my-account', name: 'My Account', className: ''},
  {to: '/sing-in', name: 'Sing In', className: ''},
]

const Navbar = () => {
  const { cartProducts, setSearchByCategory } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return(
    <nav className=' flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligh bg-white'>
      <ul className=' flex items-baseline gap-3'>
        {leftNavbarList.map(item =>
          <li key={item.name} className={item.className}>
            <NavLink
              to={item.to}
              className={({ isActive }) => isActive && !item.isLogo ? activeStyle : undefined}
              onClick={() => setSearchByCategory(item.name.toLowerCase())}
            >
              {item.name}
            </NavLink>
          </li>
        )}
      </ul>
      <ul className=' flex gap-4'>
        {rigthNavbarList.map(item =>
          <li key={item.name}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
            >
              {item.name}
              {/* {item.to === '/shopping' ? <ShoppingBagIcon className="h-6 w-6 text-black" />{count} : item.name} */}
            </NavLink>
          </li>
        )}
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>{cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}

