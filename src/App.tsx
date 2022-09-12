import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Landing, Home, Products, Search, Trending } from "./pages";
import InitOrderTable from "./components/InitOrderTable";

function App() {
    useEffect(() => {
        return () => {};
    }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<InitOrderTable />}>
                    <Route
                        path="/:company_id/:branch_id/:table_id/products/category=:cid"
                        element={<Products />}
                    />
                    <Route
                        path="/:company_id/:branch_id/:table_id/q=:keyword"
                        element={<Search />}
                    />
                    <Route
                        path="/:company_id/:branch_id/:table_id/trending"
                        element={<Trending />}
                    />
                    <Route
                        path="/:company_id/:branch_id/:table_id/home"
                        element={<Home />}
                    />
                </Route>
                    {/* <Route path="/" element={<Landing />} /> */}
            </Routes>
        </HashRouter>
    );
}
export default App;
