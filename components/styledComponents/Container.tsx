import Head from 'next/head'
import React from 'react'

type Props = {
  children: any
}

const Container = ({ children }: Props) => {
  return (
    <>
      <Head>
        <script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' defer />
      </Head>

      <div className='max-w-[1380px] w-full mx-auto px-4 h-full Container'>
        {children}
      </div>
    </>
  )
}

export default Container
