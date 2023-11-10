import React from 'react'
import Link from 'next/link';
import { BsFillGearFill, BsBellFill } from "react-icons/bs";

const Notification = () => {
    return (
        <div>
            <form action="" className='w-80 h-80 bg-sky-950 rounded'>
                <div className='flex justify-between items-center px-4 py-2 items-center text-xl text-white border-b border-white'>
                    <h1>Notification</h1>

                    <Link href={'setting/notifications-setting'} className='opacity-100 hover:opacity-50'>
                        <BsFillGearFill />
                    </Link>
                </div>
                <div className='m-8 flex flex-wrap justify-center items-center text-white opacity-50'>
                    <span className='my-4 text-6xl'>
                        <BsBellFill />
                    </span>
                    <p className='text-xl text-center'>Your notifications will be displayed here.</p>
                </div>
            </form>
        </div>
    )
}

export default Notification