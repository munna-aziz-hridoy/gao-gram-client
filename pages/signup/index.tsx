import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const SignUp: NextPage = () => {
  return (
    <div className=' h-[100vh] flex justify-center items-center '>
      <div className='w-[400px] mx-auto p-8  shadow-2xl rounded mx-4'>
        <h3 className='text-center text-2xl font-bold'>Sign Up</h3>
        <form>
          <div className='mb-6'>
            <label
              htmlFor='user-name'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              User Name
            </label>
            <input
              type='text'
              id='user-name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@example.com'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='new-password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              New password
            </label>
            <input
              type='password'
              id='new-password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='confirm-password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Confirm password
            </label>
            <input
              type='password'
              id='confirm-password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
          </div>
          <div className='flex items-center  mb-6'>
            <Link href='/login'>
              <div className='mr-2 text-sm font-medium text-gray-400 cursor-pointer'>
                Already have an account?
              </div>
            </Link>
            <Link href='/login'>
              <p className='underline text-blue-400 font-bold cursor-pointer'>
                Login
              </p>
            </Link>
          </div>
          <button
            type='submit'
            className='text-white bg-secondary hover:bg-[#E57E0C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
