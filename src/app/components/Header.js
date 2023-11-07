'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import { BsBellFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import Notification from './Notification'
import Account from './Account';

const Header = () => {
    const [bell, setBell] = useState(false)
    const [bellCount, setBellCount] = useState(0)
    const [account, setAccount] = useState(false)
    const [accountCount, setAccountCount] = useState(0)
    const [name, setName] = useState('...')

    const handleSubmit = e => e.preventDefault()

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

        <div className='flex items-center min-w-screen px-8 py-2 bg-sky-700 text-white'>
            <Link
                href={'/'}
                className='text-4xl mx-4'
                onClick={handleClick}
            >
                <h1>E-Commerce</h1>
            </Link>

            <form
                action=""
                className='mx-4 grow flex items-center'
                onSubmit={handleSubmit}
                onClick={handleClick}
            >
                <input
                    type="text"
                    placeholder='Search...'
                    className='rounded-l border-l border-y border-slate-900 grow py-1 px-4 text-black'
                />
                <button
                    className='bg-sky-950 rounded-r px-2 border-r border-y border-slate-900 py-1 px-4'
                >
                    Search
                </button>
            </form>

            <div className='flex items-center space-x-8 text-xl mx-4'>
                <div className='relative'>
                    <div className='flex relative'>
                        <button
                            className='opacity-100 hover:opacity-50 p-4'
                            onClick={handleBell}
                        >
                            <BsBellFill />
                        </button>

                        <p className='text-sky-950 absolute top-0 right-1'>{bellCount}</p>
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

                        <span className='text-base'>Hi, {name}</span>
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

                    <p className='text-sky-950 absolute top-0 right-1'>{accountCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Header