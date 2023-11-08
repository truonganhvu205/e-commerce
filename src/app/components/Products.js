'use client'

import React, { useContext } from 'react'
import { BsStarFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { ProductContext } from './AddtoCartProvider'

const Products = ({ products }) => {
    const categories = []
    const { setSelectedProducts } = useContext(ProductContext)

    { products.filter(product => categories.push(product.category)) }

    const uniqueCategories = [...new Set(categories)]

    const onSubmit = e => e.preventDefault()

    const addProduct = () => {
        setSelectedProducts(prev => [...prev, products.id])
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                {uniqueCategories.map(uniqueCategory => (
                    <div key={uniqueCategory}>
                        {products.find(product => product.category === uniqueCategory) &&
                            <div>
                                <h2 className='text-2xl font-bold capitalize mb-4'>{uniqueCategory}</h2>

                                <ul className='flex justify-evenly items-start overflow-x-auto space-x-8 mb-8'>
                                    {products.filter(productCategories => productCategories.category === uniqueCategory)
                                        .map(product => (
                                            <li key={product.id} className='w-64 h-auto border rounded'>
                                                <div className='flex justify-center items-center mx-auto my-4 w-20 h-40 '>
                                                    <img src={product.image} alt="image" />
                                                </div>

                                                <h1 className='font-bold text-md m-2'>{product.title}</h1>

                                                <div className='flex justify-between items-center m-4'>
                                                    <p>$<span className='font-bold text-lg ml-2'>{product.price}</span></p>
                                                    <p className='space-x-4 flex'>
                                                        <span className='flex flex-col justify-center items-center'>
                                                            <BsStarFill />
                                                            {product.rating.rate}
                                                        </span>
                                                        <span className='flex flex-col justify-center items-center'>
                                                            <BsFillPersonFill />
                                                            {product.rating.count}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className='flex justify-end m-4'>
                                                    <button
                                                        className='bg-sky-700 rounded text-white px-4 py-1 
                                                                    opacity-100 hover:opacity-50 
                                                                    transition transform hover:-translate-y-1 
                                                                    motion-reduce:transition-none 
                                                                    motion-reduce:hover:transform-none'
                                                        onClick={addProduct}
                                                    >
                                                        <p className='flex justify-center items-center'>
                                                            <span className='mr-2'>Buy</span>
                                                            <BsFillCartFill />
                                                        </p>
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        }
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Products