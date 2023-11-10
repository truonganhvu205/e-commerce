'use client'

import React, { useContext } from 'react'
import Link from 'next/link';
import { BsStarFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";

const ProductsInfo = ({ product }) => {
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
                <Link href={`/products/${product.title}`}>
                    <button
                        type='submit'
                        className='bg-sky-700 rounded text-white px-4 py-1 opacity-100 hover:opacity-50'
                    >
                        <p className='flex justify-center items-center'>
                            <span className='mr-2'>Buy</span>
                            <BsFillCartFill />
                        </p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductsInfo