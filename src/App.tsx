import React from 'react';
import "./App.css"
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Products, Search, Trending } from "./pages"


function App() {
  return <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/:restaurant/:branch/:table/products/category=:cid" element={<Products />} />
        <Route path="/:restaurant/:branch/:table/q=:keyword" element={<Search />} />
        <Route path="/:restaurant/:branch/:table/trending" element={<Trending />} />
        <Route path="/:restaurant/:branch/:table" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>

    </BrowserRouter>
  </RecoilRoot>
}
export default App;
