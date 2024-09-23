import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs'

const MainLayouts = () => {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <main className='container'>
          <BreadCrumbs/>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default MainLayouts
