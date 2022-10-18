import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Login: NextPage = () => {
  return (
    <div className=' h-[100vh] flex justify-center items-center '>
      <div className='w-[400px] mx-auto p-8  shadow-2xl rounded mx-4'>
        <h3 className='text-center text-2xl font-bold'>Login</h3>
        <form>
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
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
          </div>
          <div className='flex items-start mb-6'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required
              />
            </div>
            <label
              htmlFor='remember'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Remember me
            </label>
          </div>
          <div className='flex items-center  mb-6'>
            <Link href='/signup'>
              <div className='mr-2 text-sm font-medium text-gray-400 cursor-pointer'>
                If you don't have any account. Please
              </div>
            </Link>
            <Link href='/signup'>
              <p className='underline text-blue-400 font-bold cursor-pointer'>
                Sign Up
              </p>
            </Link>
          </div>
          <button
            type='submit'
            className='text-white bg-secondary hover:bg-[#E57E0C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
