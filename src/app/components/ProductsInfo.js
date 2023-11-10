'use client'

import React, { useContext } from 'react'
import { BsStarFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { ProductContext } from './AddtoCartProvider'

const ProductsInfo = ({ product }) => {
    const { setSelectedProducts } = useContext(ProductContext)

    const addProduct = () => {
        setSelectedProducts(prev => [...prev, product.id])
    }

    return (
        <div>
            <div className='flex justify-center items-center mx-auto my-4 w-20 h-40 border-b'>
                <img src={product.image} alt="image" />
            </div>

            <h1 className='font-bold text-md m-4 text-center w-fit h-32'>{product.title}</h1>

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
        </div>
    )
}

export default ProductsInfo