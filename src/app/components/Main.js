'use client'

import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from "next/navigation";
import Loading from '../loading'
import Products from './products/Products'
import { ProductContext } from './provider/AddtoCartProvider';
import { BsFillEmojiKissFill } from "react-icons/bs";

const Main = () => {
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { setSelectedProducts } = useContext(ProductContext)
    const [success, setSuccess] = useState(false)

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

    useEffect(() => {
        if (window.location.href.includes('success')) {
            setSelectedProducts([])
            setSuccess(true)
        }
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div>
                {success &&
                    <div className='flex items-center w-fit block mx-auto bg-sky-700 text-white p-4 px-4 rounded text-4xl my-4'>
                        Thanks for your order!

                        <span className='ml-4'>
                            <BsFillEmojiKissFill />
                        </span>
                    </div>
                }
            </div>

            <div className='flex justify-center items-center flex-1'>
                <Products products={products} />
            </div>
        </div>
    )
}

export default Main