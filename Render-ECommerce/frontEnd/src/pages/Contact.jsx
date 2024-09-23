// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-700'>Our Store</p>
        <p className='text-gray-600'>1-27/1,Kukatpally <br/> Phase-9, Hyderabad, Telangana</p>
        <p className='text-gray-600' > Tel: (+91) 2309219322 <br/> Email: admin@render.com </p>
       
        <p></p>

      </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact