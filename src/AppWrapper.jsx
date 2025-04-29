import React, { useState } from 'react';
import Product from './features/produk/Product';
import HomePage from './HomePage';

const AppWrapper = () => {

  const [showHeader, setShowHeader] = useState(true);

  const toggleView = () => {
  
    setShowHeader(prevState => !prevState);
  };

  return (
    <>
      {showHeader ? <HomePage toggleView={toggleView} /> : <Product toggleView={toggleView} />}
    </>
  );
};

export default AppWrapper;
