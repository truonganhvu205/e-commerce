'use client'

import React, { useState, useEffect } from 'react'
import Loading from '@/app/loading'
import ProductsInfo from '@/app/components/products/ProductsInfo'

const page = ({ params: { name } }) => {
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
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto mb-8'>
                {products.filter(productsName => productsName.title.toLowerCase().includes(name.toLowerCase()))
                    .map(product => (
                        <div>
                            <h2 className='text-2xl font-bold capitalize mb-4'>{product.category}</h2>

                            <ul>
                                <li key={product.id} className='w-64 h-auto border rounded'>
                                    <ProductsInfo product={...product} />
                                </li>
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default page