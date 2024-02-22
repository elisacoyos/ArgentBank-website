import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';

const LoginPage = () => {
  return (
    <div className='page_login'>
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
};

export default LoginPage;