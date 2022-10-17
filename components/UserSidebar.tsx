import React from 'react'

type Props = {}

const UserSidebar = (props: Props) => {
  return (
    <div className='z-50'>
      <aside className='w-64 hidden lg:block' aria-label='Sidebar'>
        <div className='overflow-y-auto py-4 px-3 bg-white SidebarHeight shadow-lg'>
          <p className=' font-bold text-white p-3 my-3 bg-primary rounded-[2px]'>
            সকল
          </p>

          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='flex items-center border-b-2 p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary group'
              >
                <span className='ml-3'>মাই ওর্ডার</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center border-b-2 p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary group'
              >
                <span className='ml-3'>মাই রিভিউস</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex border-b-2 items-center p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary group'
              >
                <span className='ml-3'>মাই উইসলিস্ট</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 border-b-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary group'
              >
                <span className='ml-3'>ম্যানেজ একাউন্ট</span>
              </a>
            </li>
            {/* <li>
              <button
                type='button'
                className='flex items-center p-2 w-full text-base font-normal  text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary transition duration-75 group '
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-secondary group-hover:text-white transition duration-75'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span
                  className='flex-1 ml-3 text-left whitespace-nowrap'
                  sidebar-toggle-item='dropdown-example'
                >
                  ই-কমার্স
                </span>
                <svg
                  sidebar-toggle-item='dropdown-example'
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              <ul id='dropdown-example' className='py-2 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='flex items-center p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary ml-10'
                  >
                    প্রডাক্টস
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary ml-10'
                  >
                    বিলিং
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary ml-10'
                  >
                    ইনভয়েস
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-600 hover:text-white rounded-[2px] hover:bg-secondary group'
              >
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-secondary hover:text-white transition duration-75  group-hover:text-white '
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>জুতা</span>
                <span className='inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  প্রিমিয়াম
                </span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default UserSidebar
