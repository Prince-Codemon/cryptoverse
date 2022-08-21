import React from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Home,
  CryptoDetails,
  Crytpocurrencies,
  Exchanges,
  News,
} from "./components";
import "antd/dist/antd.css";
import "./App.css";
import store from "./app/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Router>
      <Provider store={store}>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Crytpocurrencies />}
                />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              CryptoVerse <br /> ©2020 Created by Prince
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
      </Provider>
    </Router>
  );
};

export default App;
