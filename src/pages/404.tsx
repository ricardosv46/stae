import { Spinner } from '@components/common'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Default = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return <Spinner />
}

export default Default
