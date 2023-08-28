import {BrowserRouter, useRoutes} from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import {Home} from "../Home"
import {MyAccount} from "../MyAccount"
import {MyOrder} from "../MyOrder"
import {Orders} from "../Orders"
import {SingIn} from "../SingIn"
import {NotFound} from "../NotFound"
import {Navbar} from "../../Components/Navbar"
//import {Header} from "../../Components/Header"
import {Layout} from "../../Components/Layout"

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
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
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
