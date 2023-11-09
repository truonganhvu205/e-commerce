'use client'

import React, { useContext } from 'react'
import { ProductContext } from '../components/AddtoCartProvider'

const page = () => {
    const { selectedProducts } = useContext(ProductContext)

    return (
        <div>
            {selectedProducts.join(',')}
        </div>
    )
}

export default page