import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart * Increment Quantity
    const [count, setCount] = useState(0)

    // Product Detail  *  Open/Close
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

    // Checkout Side Menu  *  Open/Close
    const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setisCheckoutSideMenuOpen(false)    
    
    // Product Detail  *  Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart * Add Products to cart
    const [cartProducts, setCartProducts] = useState([])    

    // Shopping Cart  Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,            
            productToShow,  
            setProductToShow,
            cartProducts,
            setCartProducts,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}