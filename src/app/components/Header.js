'use client'

import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { BsBellFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import Notification from './Notification'
import Account from './Account';
import { ProductContext } from './provider/AddtoCartProvider';

const Header = () => {
    const router = useRouter()
    const [bell, setBell] = useState(false)
    const [account, setAccount] = useState(false)
    const [search, setSearch] = useState('')

    const { selectedProducts } = useContext(ProductContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/search/" + search)
    }

    const handleBell = () => {
        setBell(!bell)
        setAccount(false)
    }

    const handleAccount = () => {
        setAccount(!account)
        setBell(false)
    }

    const handleClick = () => {
        setBell(false)
        setAccount(false)
    }

    return (
        <div>
            <div className='grid sm:grid-rows-1'>
                <div className='flex items-center min-w-screen px-8 pt-4 bg-sky-700 text-white'>
                    <Link
                        href={'/'}
                        className='text-4xl capitalize mx-4'
                        onClick={handleClick}
                    >
                        <h1>e-commerce</h1>
                    </Link>

                    <form
                        action=""
                        className='mx-4 grow flex items-center'
                        onClick={handleClick}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder='Search...'
                            className='rounded-l border-l border-y border-slate-900 grow py-1 px-4 text-black'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='bg-sky-950 rounded-r px-2 border-r border-y border-slate-900 py-1 px-4
                                    opacity-100 hover:opacity-80'
                        >
                            Search
                        </button>
                    </form>

                    <div className='flex items-center space-x-8 text-xl mx-4 z-10'>
                        <div className='relative'>
                            <div className='flex relative'>
                                <button
                                    className='opacity-100 hover:opacity-50 p-4'
                                    onClick={handleBell}
                                >
                                    <BsBellFill />
                                </button>

                                <p className='text-sky-950 absolute top-0 right-1'>0</p>
                            </div>

                            <div
                                className='absolute right-0'
                                onClick={handleClick}
                            >
                                {bell && <Notification />}
                            </div>
                        </div>

                        <div className='relative'>
                            <button
                                className='opacity-100 hover:opacity-50 flex justify-center items-center space-x-2 p-4'
                                onClick={handleAccount}
                            >
                                <BsFillPersonFill />

                                <span className='text-base'>Hi, ...</span>
                            </button>

                            <div
                                className='absolute right-0'
                                onClick={handleClick}
                            >
                                {account && <Account />}
                            </div>
                        </div>

                        <div className='flex relative'>
                            <Link
                                href={'/cart'}
                                className='opacity-100 hover:opacity-50 p-4'
                                onClick={handleClick}
                            >
                                <BsFillCartFill />
                            </Link>

                            <p className='text-sky-950 absolute top-0 right-1'>{selectedProducts.length}</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center space-x-8 pb-2 bg-sky-700 text-white z-0'>
                    <Link href={'/category/mens-clothing'}>
                        <button className='capitalize opacity-50 hover:opacity-100'>
                            men's clothing
                        </button>
                    </Link>

                    <Link href={'/category/jewelery'}>
                        <button className='capitalize opacity-50 hover:opacity-100'>
                            jewelery
                        </button>
                    </Link>

                    <Link href={'/category/electronics'}>
                        <button
                            className='capitalize opacity-50 hover:opacity-100'
                            onClick={() => { }}
                        >
                            electronics
                        </button>
                    </Link>

                    <Link href={'/category/womens-clothing'}>
                        <button className='capitalize opacity-50 hover:opacity-100'>
                            women's clothing
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header