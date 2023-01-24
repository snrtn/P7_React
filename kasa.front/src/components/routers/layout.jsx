import * as React from 'react'
import Navbar from '../navigation/navbar';
import Footer from '../navigation/footer';
import "./routers.css";

const Layout = (props) => {
  return (
  <div className='layContainer'>
    <div className='layNav'>
      <Navbar />
    </div>
    <div className='layChil'>
      {props.children}
    </div>
    <div className='layFoot'>
      <Footer />
    </div>
  </div>
  )
}

export default Layout
