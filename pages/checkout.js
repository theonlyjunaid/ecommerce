import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Link from 'next/link'

const checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal, qty }) => {
    return (
        <div className='container m-auto'>

            <h1 className='font-bold text-3xl text-center my-8'>Checkout</h1>
            <h2>1. Delivery Details</h2>
            <div className="mx-auto flex ">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>
            </div>

            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Address
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                />
            </div>
            <div className="flex">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                            phone
                        </label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                            city
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>


                </div>
            </div>
            <div className="flex">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
                            pincode
                        </label>
                        <input
                            type="number"
                            id="pincode"
                            name="pincode"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>


                </div>
            </div>
            <h2>2. Review cart item </h2>
            <div className="sidbar  p-4  py-10  w-[100%] bg-gray-200 z-20">
                <ol className='list-decimal text-semibold text-black'>
                    {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                    {Object.keys(cart).map((k) => {
                        const { name, price, qty, size, varient } = cart[k]
                        return (
                            <li className='flex my-2 text-lg' key={k}>
                                <div className='w-1/3 '>{name} </div>
                                <div className='flex items-center justify-center w-1/3 '><AiOutlineMinusCircle className='mx-1 cursor-pointer' onClick={() => { removeFromCart(k, 1, price, name, size, varient) }} />
                                    {qty}  <AiOutlinePlusCircle className='mx-1 cursor-pointer' onClick={() => { addToCart(k, 1, price, name, size, varient) }} /> </div>
                            </li>)
                    })}
                    <span>the total amount is {subTotal}</span>
                </ol>
                <Link href=""><a >
                    <div className="mx-4 px-1 py-1 w-max rounded-md my-5  bg-green-500">Pay Now</div>
                </a></Link>
            </div>
        </div>
    )
}

export default checkout