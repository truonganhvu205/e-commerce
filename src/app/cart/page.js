'use client'

import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Loading from '@/app/loading'
import { ProductContext } from '../components/provider/AddtoCartProvider'

const page = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')

    const { selectedProducts, setSelectedProducts } = useContext(ProductContext)
    const uniqueId = [...new Set(selectedProducts)]

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            next: {
                revalidate: 60,
            },
        })
            .then((res) => res.json())
            .then((json) => setProducts(json));

        setLoading(false)
    }, [])

    const addQuantityItems = (id) => {
        setSelectedProducts(prev => [...prev, id])
    }

    const removeQuantityItems = (id) => {
        const pos = selectedProducts.indexOf(id)

        if (pos !== -1) {
            setSelectedProducts(prev =>
                prev.filter((value, index) => index !== pos)
            )
        }
    }

    let subTotal = 0

    if (selectedProducts?.length) {
        for (let id of selectedProducts) {
            const price = products.find(product => product.id === id).price
            subTotal += price
        }
    }

    const deliveryPrice = 5
    const total = subTotal + deliveryPrice

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className='flex mx-8 space-x-8'>
                <div>
                    {uniqueId.map(id => (
                        <ul key={id}>
                            {products.filter(product => product.id === id).map(product => (
                                <li key={product.id}>
                                    <div className='flex my-4 items-center border rounded p-4'>
                                        <img src={product.image} alt="" className='w-1/5 mr-8' />
                                        <div className='ml-8'>
                                            <Link href={`/products/${product.title}`}>
                                                <h1 className='text-xl font-semibold my-4'>{product.title}</h1>
                                            </Link>

                                            <p className='text-lg'>$ <span className='font-bold text-md my-4'>{product.price}</span></p>

                                            <div className='flex items-center space-x-4 my-4'>
                                                <button
                                                    className='text-center text-xl text-white bg-sky-700 rounded-full w-8 h-8 opacity-100 hover:opacity-50'
                                                    onClick={() => removeQuantityItems(product.id)}
                                                >
                                                    -
                                                </button>

                                                <p>
                                                    {selectedProducts.filter(id => product.id === id).length}
                                                </p>

                                                <button
                                                    className='text-center text-xl text-white bg-sky-700 rounded-full w-8 h-8 opacity-100 hover:opacity-50'
                                                    onClick={() => addQuantityItems(product.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                <div className='m-4 bg-sky-700 rounded'>
                    <div className='flex space-x-4 m-4'>
                        <input
                            className='bg-gray-100 w-full rounded mb-4 p-2 px-4'
                            type="text"
                            placeholder='First name'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <input
                            className='bg-gray-100 w-full rounded mb-4 p-2 px-4'
                            type="text"
                            placeholder='Last name'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>

                    <div className='flex space-x-4 m-4'>
                        <input
                            className='bg-gray-100 w-full rounded mb-4 p-2 px-4'
                            type="text"
                            placeholder='Street address, number'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        <input
                            className='bg-gray-100 w-full rounded mb-4 p-2 px-4'
                            type="text"
                            placeholder='City and postal code'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>

                    <div className='m-4'>
                        <input
                            className='bg-gray-100 w-full rounded mb-2 p-2 px-4'
                            type="email"
                            placeholder='Email address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='m-4 text-white border-b border-dashed pb-2'>
                        {uniqueId.map(id => (
                            <ul key={id}>
                                {products.filter(product => product.id === id).map(product => (
                                    <li key={product.id}>
                                        <div>
                                            <h1 className='text-lg font-semibold my-2'>{product.title}</h1>

                                            <div className='flex items-center space-x-4 my-2'>
                                                <p className='grow text-sm'>
                                                    Quantity:
                                                    <span className='ml-2'>
                                                        {selectedProducts.filter(id => product.id === id).length}
                                                    </span>
                                                </p>
                                                <p className='text-md'>
                                                    $
                                                    <span className='ml-2 font-semibold text-md my-2'>{product.price}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>

                    <div>
                        <div className='m-4 font-semibold text-white flex'>
                            <h1 className='grow text-lg opacity-70'>Subtotal</h1>
                            <h3 className='text-md font-semibold'>$ {subTotal}</h3>
                        </div>

                        <div className='m-4 font-semibold text-white flex'>
                            <h1 className='grow text-lg opacity-70'>Delivery</h1>
                            <h3 className='text-md font-semibold'>$ {deliveryPrice}</h3>
                        </div>

                        <div className='m-4 font-semibold text-white flex border-t pt-4'>
                            <h1 className='grow text-lg opacity-70'>Total</h1>
                            <h3 className='text-md font-semibold'>$ {total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page