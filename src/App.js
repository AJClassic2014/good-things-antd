import React from 'react';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import { ConfigProvider } from 'antd';
import './App.css';

const App = () => (
      <ConfigProvider
            theme={{
                  token: {
                        fontFamily: 'HurmeGeometricSans2,Helvetica,Arial,sans-serif',
                  },
            }}
      >
            <Header />
            <Content />
            <Footer />

      </ConfigProvider>
);
export default App;