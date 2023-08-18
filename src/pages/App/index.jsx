import { BrowserRouter, useRoutes } from "react-router-dom"
import {Home} from "../Home"
import {MyAccount} from "../MyAccount"
import {MyOrder} from "../MyOrder"
import {Orders} from "../Orders"
import {SingIn} from "../SingIn"
import {NotFound} from "../NotFound"
import './App.css'

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
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
