import React from 'react';
import './App.css';
import Auth from './features/auth/Auth';
import Layout from './common/layout/Layout';
import Signin from './pages/Signin';
import Products from './pages/Products';

function App() {
  return (
    <Auth>
      <Layout>
        <Products/>
      </Layout>
    </Auth>
  );
}

export default App;
