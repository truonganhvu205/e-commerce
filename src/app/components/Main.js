'use client'

import React, { useState, useEffect } from 'react'
import Loading from '../loading'
import Products from './products/Products'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            next: {
                revalidate: 60,
            },
        })
            .then((res) => res.json())
            .then((json) => setProducts(json));

        setLoading(false)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='flex justify-center items-center flex-1'>
            <Products products={products} />
        </div>
    )
}

export default Main