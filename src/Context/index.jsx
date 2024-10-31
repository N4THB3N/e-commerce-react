import { createContext, useState, useEffect } from 'react';

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

    // Get Products     
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    
    // Get products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchTy, items, searchByTitle, searchByCategory) => {
        if(searchTy === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }

        if(searchTy === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }

        if(searchTy === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchTy){
            return items
        }

    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])

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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}