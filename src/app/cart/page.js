'use client'

import React, { useContext, useEffect, useState } from 'react'
import Loading from '@/app/loading'
import { ProductContext } from '../components/provider/AddtoCartProvider'

const page = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { selectedProducts } = useContext(ProductContext)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            next: {
                revalidate: 60,
            },
        })
            .then((res) => res.json())
            .then((json) => setProducts(json));

        setLoading(false)
    }, [selectedProducts])

    if (loading) {
        return <Loading />
    }

    return (
        <div></div>
    )
}

export default page