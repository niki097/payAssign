import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Topnav from '../Header/Topnav';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
