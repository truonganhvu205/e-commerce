'use client'

import React, { createContext } from 'react'
import useLocalStorageState from 'use-local-storage-state'

const ProductContext = createContext()

const AddtoCartProvider = ({ children }) => {
    const [selectedProducts, setSelectedProducts] = useLocalStorageState('cart', {
        defaultValue: []
    })

    const value = {
        selectedProducts,
        setSelectedProducts,
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, AddtoCartProvider }