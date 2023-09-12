import {BrowserRouter, useRoutes} from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import {Home} from "../Home"
import {MyAccount} from "../MyAccount"
import {MyOrder} from "../MyOrder"
import {Orders} from "../Orders"
import {SingIn} from "../SingIn"
import {NotFound} from "../NotFound"
import {Navbar} from "../../Components/Navbar"
import {Layout} from "../../Components/Layout"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
//import {Header} from "../../Components/Header"

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/orders', element: <Orders/>},
    {path: '/sing-in', element: <SingIn/>},
    {path: '/*', element: <NotFound/>}
  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        {/* <Header/> */}
        <Layout>
          <AppRoutes/>
        </Layout>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
