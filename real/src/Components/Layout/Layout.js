import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
