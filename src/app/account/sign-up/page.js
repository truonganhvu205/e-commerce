'use client'

import React, { useState } from 'react'
import Loading from '@/app/loading'

const page = () => {
    const [loading, setLoading] = useState(true)

    if (loading) {
        return <Loading />
    }
}

export default page