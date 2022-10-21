import { NextPage } from 'next'
import { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavbarMenu from '../../components/NavbarMenu'
import Container from '../../components/styledComponents/Container'

const Cart: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <NavbarMenu />
      <Container>
        <div className='mt-20 md:flex items-center'>
          <div className='overflow-x-auto  relative shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='py-3 px-6'>
                    <span className='sr-only'>Image</span>
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Product
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Price
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Qty
                  </th>

                  <th scope='col' className='py-3 px-6'>
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='p-4 w-32 relative'>
                    <img
                      className='h-16 rounded '
                      src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                      alt='Apple Watch'
                    />
                    <button
                      type='button'
                      className='absolute top-4 right-16 ml-auto  -mx-1.5 -my-1.5 bg-gray-900 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                      data-dismiss-target='#toast-warning'
                      aria-label='Close'
                    >
                      <span className='sr-only'>Close</span>
                      <svg
                        aria-hidden='true'
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    Apple Watch
                  </td>
                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    $599
                  </td>
                  <td className='py-4 px-6'>
                    <div className='flex items-center space-x-3'>
                      <button
                        className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                        type='button'
                      >
                        <span className='sr-only'>Quantity button</span>
                        <svg
                          className='w-4 h-4'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                      <div>
                        <input
                          type='number'
                          id='first_product'
                          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='1'
                          required
                        />
                      </div>
                      <button
                        className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                        type='button'
                      >
                        <span className='sr-only'>Quantity button</span>
                        <svg
                          className='w-4 h-4'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>

                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    $1198
                  </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='p-4 w-32 relative'>
                    <img
                      className='h-16 rounded '
                      src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                      alt='Apple Watch'
                    />
                    <button
                      type='button'
                      className='absolute top-4 right-16 ml-auto  -mx-1.5 -my-1.5 bg-gray-900 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                      data-dismiss-target='#toast-warning'
                      aria-label='Close'
                    >
                      <span className='sr-only'>Close</span>
                      <svg
                        aria-hidden='true'
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    Apple Watch
                  </td>
                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    $599
                  </td>
                  <td className='py-4 px-6'>
                    <div className='flex items-center space-x-3'>
                      <button
                        className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                        type='button'
                      >
                        <span className='sr-only'>Quantity button</span>
                        <svg
                          className='w-4 h-4'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                      <div>
                        <input
                          type='number'
                          id='first_product'
                          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='1'
                          required
                        />
                      </div>
                      <button
                        className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                        type='button'
                      >
                        <span className='sr-only'>Quantity button</span>
                        <svg
                          className='w-4 h-4'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>

                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    $1198
                  </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='p-4 w-32 relative'>
                    <img
                      className='h-16 rounded '
                      src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                      alt='Apple Watch'
                    />
                    <button
                      type='button'
                      className='absolute top-4 right-16 ml-auto  -mx-1.5 -my-1.5 bg-gray-900 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                      data-dismiss-target='#toast-warning'
                      aria-label='Close'
                    >
                      <span className='sr-only'>Close</span>
                      <svg
                        aria-hidden='true'
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    Apple Watch
                  </td>
                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    $599
                  </td>
                  <td className='py-4 px-6'>
                    <div className='flex items-center space-x-3'>
                      <button
                        className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                        type='button'
                      >
                        <span className='sr-only'>Quantity button</span>
                        <svg
                          className='w-4 h-4'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                      <div>
                        <input
                          type='number'
                          id='first_product'
                          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='1'
                          required
                        />
                      </div>
                      <button
                        className='inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                        type='button'
                      >
                        <span className='sr-only'>Quantity button</span>
                        <svg
                          className='w-4 h-4'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>

                  <td className='py-4 px-6 font-semibold text-gray-900 dark:text-white'>
                    $1198
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='md:ml-10 mt-10 md:mt-0 p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <form>
              <h2 className='text-center text-2xl font-bold mb-5'>
                Cart Totals
              </h2>
              <div className='relative z-0 mb-6 w-full group'>
                <input
                  type='text'
                  name='sub-total'
                  id='sub-total'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='sub-total'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Sub Total
                </label>
              </div>
              <div className='relative z-0 mb-6 w-full group'>
                <input
                  type='text'
                  name='total'
                  id='total'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='total'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Total
                </label>
              </div>
            </form>
            <button
              type='button'
              className='text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default Cart
