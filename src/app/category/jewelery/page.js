'use client'

import React, { useState, useEffect } from 'react'
import Loading from '@/app/loading'
import ProductsInfo from '@/app/components/products/ProductsInfo'

const page = () => {
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

    const category = []

    { products.filter(product => category.push(product.category)) }

    const uniqueCategory = [...new Set(category)]

    if (loading) {
        return <Loading />
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold capitalize mb-4'>
                {uniqueCategory[1]}
            </h2>

            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto mb-8'>
                {products.filter(product => product.category === uniqueCategory[1]).map(product => (
                    <li key={product.id} className='w-64 h-auto border rounded'>
                        <ProductsInfo product={...product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default page