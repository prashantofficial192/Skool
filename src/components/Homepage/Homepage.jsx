import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Products from '../Product/Products'
import Footer from "../Footer/Footer"

function Homepage() {
    return (
        <>
            <Navbar />
            <Banner />
            <Category />
            <Products />
            <Footer />
        </>
    )
}

export default Homepage
