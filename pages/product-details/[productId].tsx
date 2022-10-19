import { NextPage } from 'next'
import 'react-tabs/style/react-tabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Cart from '../../components/Cart'
import CategorySidebar from '../../components/CategorySidebar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavbarMenu from '../../components/NavbarMenu'
import Container from '../../components/styledComponents/Container'

const ProductDetails: NextPage = () => {
  const router = useRouter()
  const { productId } = router.query
  console.log(productId)
  return (
    <div>
      <Head>
        <title>Gao Gram</title>
        <script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' defer />
      </Head>
      <div className='sticky top-0'>
        {/* Header */}
        <Header />
        {/* Navbar */}
        <NavbarMenu />
        {/* Sidebar */}
        <CategorySidebar />
      </div>

      <Cart />

      <Container>
        <div className=' h-[100vh] flex justify-center items-center'>
          <div className='flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100  '>
            <div>
              <img
                className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                src='https://images.unsplash.com/photo-1666043073961-6112c7e1646c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />

              <img
                className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                src='https://images.unsplash.com/photo-1666043073961-6112c7e1646c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />

              <img
                className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                src='https://images.unsplash.com/photo-1666043073961-6112c7e1646c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />
            </div>

            <img
              className='object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
              src='https://images.unsplash.com/photo-1666043073961-6112c7e1646c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              alt=''
            />

            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100  '>
            <Tabs>
              <div>
                <TabList>
                  <Tab>
                    <img
                      className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                      src='https://images.unsplash.com/photo-1666115883713-c5766e9d668e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </Tab>
                  <Tab>
                    <img
                      className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                      src='https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </Tab>
                  <Tab>
                    <img
                      className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                      src='https://images.unsplash.com/photo-1666147166729-b13bd4d7198c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </Tab>
                </TabList>
              </div>
              <div>
                <TabPanel>
                  <img
                    className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                    src='https://images.unsplash.com/photo-1666115883713-c5766e9d668e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </TabPanel>
                <TabPanel>
                  <img
                    className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                    src='https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </TabPanel>
                <TabPanel>
                  <img
                    className='object-cover w-full h-16 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
                    src='https://images.unsplash.com/photo-1666147166729-b13bd4d7198c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                  />
                </TabPanel>
              </div>
            </Tabs>
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default ProductDetails
