import { NavLink } from "react-router-dom"

const leftNavbarList = [
    {to: '/', name: 'Shopi', className: 'font-semibold text-2xl first-letter:text-red-600 first-letter:text-4xl ', isLogo: true},
    {to: '/', name: 'All', className: ''},
    {to: '/clothes', name: 'Clothes', className: ''},
    {to: '/electronics', name: 'Electronics', className: ''},
    {to: '/sport', name: 'Sport', className: ''},
    {to: '/toys', name: 'Toys', className: ''},
    {to: '/others', name: 'Others', className: ''},
]

const rigthNavbarList = [
    {to: '/my-order', name: 'My Order', className: ''},
    {to: '/my-account', name: 'My Account', className: ''},
    {to: '/sing-in', name: 'Sing In', className: ''},
    {to: '', name: '🛒0', className: ''},
]

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className=' flex justify-between items-baseline fixed z-10 top-0 w-screen py-5 px-8 text-sm font-light bg-gray-100'>
            <ul className=' flex items-baseline gap-4'>
                {leftNavbarList.map(item =>
                    <li key={item.name} className={item.className}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) => isActive && !item.isLogo ? activeStyle : undefined}
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
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export {Navbar}