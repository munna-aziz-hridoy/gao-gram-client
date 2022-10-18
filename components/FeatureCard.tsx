import React from 'react'

type Props = {}

const FeatureCard = (props: Props) => {
  return (
    <div className='w-full py-2 px-1 bg-[#EEEFFB]  rounded-lg border border-gray-200 shadow-md flex gap-2 items-center flex-row-reverse justify-end'>
      <div>
        <h5 className='mb-2 sm:text-[18px] md:text-lg lg:text-xl text-base font-semibold tracking-tight text-gray-900 '>
          সকল পণ্যে ২৩% ডিসকাউন্ট
        </h5>
        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
          Shop Now
        </p>
      </div>
      <div className='flex'>
        <img
          height={100}
          width={100}
          className='rounded'
          src='https://static.toiimg.com/photo/msid-68976835/68976835.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default FeatureCard
