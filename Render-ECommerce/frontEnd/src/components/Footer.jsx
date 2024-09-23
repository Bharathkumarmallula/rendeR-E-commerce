import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (<div>
            <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <Link to='/'><p className='jersey-10-regular text-4xl font-bold'>RendeR.</p></Link>
                    <p className='w-ful md:w-2/3 text-gray-600'> Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>
                        Company
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
                <div><p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-345-323-786</li>
                        <li>contact@render.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'> copyright 2024@ render.com - All right reserved
                </p>
            </div>
            </div>)
}

export default Footer