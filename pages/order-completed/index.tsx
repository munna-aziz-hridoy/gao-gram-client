import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { BiTask, BiTime } from 'react-icons/bi'
import { MdOutlineDoneAll } from 'react-icons/md'
import NavbarMenu from '../../components/NavbarMenu'

const OrderCompleted: NextPage = () => {
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
      <div className='w-[500px] relative mx-auto p-8  border-b border-l rounded sm:mx-4 '>
        <div className='text-[#3866f1] text-7xl absolute -left-10 top-0'>
          <BiTime />
        </div>
        <div className='text-secondary text-7xl  p-0 absolute -right-14 -bottom-10'>
          <BiTask />
        </div>
        <div className='flex justify-center '>
          <p className='text-center text-3xl shadow-md text-secondary p-4  bg-gray-50 rounded-full font-bold mb-5'>
            <MdOutlineDoneAll />
          </p>
        </div>
        <h3 className='text-center text-2xl font-bold mb-5'>
          Order Completed!
        </h3>
        <p className='text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          dolorum nostrum. Quibusdam laborum aut similique exceptur
        </p>
        <div className='flex justify-center mt-5'>
          <Link href='/'>
            <button
              type='submit'
              className='text-white mt-5 bg-secondary hover:bg-[#E57E0C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-sm  px-5 py-2.5 text-center'
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderCompleted
