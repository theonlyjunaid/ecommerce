import React, { useEffect } from 'react'
import Router from 'next/router'

const myaccount = () => {
    const router = Router;
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        } else {
            router.push('/myaccount')
        }
    }, [])
    return (
        <div>myaccount</div>
    )
}

export default myaccount