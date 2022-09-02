import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import Products from '../../components/Products'
import ProductHead from '../../components/ProductHead'
import Footer from '../../components/Footer'
import Recommend from '../../components/Recommend'



const Post = () => {

    const router = useRouter()
    const fileId = router.query.slug

    return (
        <>
            <Navbar />
            <ProductHead />
            <Products category={fileId} />
            <Recommend />
            <Footer />
        </>
    )
}

export default Post