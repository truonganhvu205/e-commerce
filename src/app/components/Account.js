import React from 'react'
import Link from 'next/link'

const Account = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className=''>
            <form
                action=""
                onSubmit={handleSubmit}
                className='w-32 h-28 bg-sky-950 rounded flex flex-wrap justify-center items-center'
            >
                <button
                    className='border border-slate-900 w-3/4 h-1/3 rounded bg-sky-700 text-base opacity-100 hover:opacity-50'>
                    <Link href={'/account/sign-in'}>Sign in</Link>
                </button>

                <button
                    className='border border-slate-900 w-3/4 h-1/3 rounded bg-sky-700 text-base opacity-100 hover:opacity-50'>
                    <Link href={'/account/sign-up'}>Sign up</Link>
                </button>
            </form>
        </div>
    )
}

export default Account