import React from 'react';
import "./App.css"
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home } from "./pages"
import Products from './pages/Products';

function App() {
  return <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/:restaurant/:branch/:table/products/category=:cid" element={<Products />} />
        <Route path="/:restaurant/:branch/:table" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>

    </BrowserRouter>
  </RecoilRoot>
}
export default App;
