'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../components/AddtoCartProvider'

const page = () => {
    const { selectedProducts } = useContext(ProductContext)
    const [productsInfo, setProductsInfo] = useState([])

    useEffect(() => {
        const uniqueIds = [...new Set(selectedProducts)]

        fetch(`https://fakestoreapi.com/products/${uniqueIds.join(',')}`)
            .then(res => res.json())
            .then(json => setProductsInfo(json))
    }, [selectedProducts])

    return (
        <div>
            {!productsInfo.length && (
                <div className='text-xl font-bold'>Sorry, no products in your shopping cart.</div>
            )}

            {productsInfo.length && productsInfo.map(productInfo => (
                <div key={productInfo.id}>
                    {productInfo.title}
                </div>
            ))}
        </div>
    )
}

export default page