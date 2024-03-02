import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ShopingCardPage = lazy(() => import("./pages/ShopingCardPage"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/shopingCard" element={<ShopingCardPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
