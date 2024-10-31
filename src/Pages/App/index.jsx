import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home></Home>},
    {path: '/clothes', element: <Home></Home>},
    {path: '/electronics', element: <Home></Home>},
    {path: '/furnitures', element: <Home></Home>},
    {path: '/toys', element: <Home></Home>},
    {path: '/others', element: <Home></Home>},
    {path: '/my-account', element: <MyAccount></MyAccount>},
    {path: '/my-order', element: <MyOrder></MyOrder>},
    {path: '/my-orders', element: <MyOrders></MyOrders>},
    {path: '/my-orders/last', element: <MyOrder></MyOrder>},
    {path: '/my-orders/:id', element: <MyOrder></MyOrder>},
    {path: '/*', element: <NotFound></NotFound>},
    {path: '/sign-in', element: <SignIn></SignIn>}
  ])

  return routes
}

const App = () => {
  return (

    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        <NavBar></NavBar>
        <CheckoutSideMenu></CheckoutSideMenu>
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
