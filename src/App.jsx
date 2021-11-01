import { createSignal, lazy } from "solid-js";
import { Router, Routes, Route, Link } from "solid-app-router";
import styles from "./App.module.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const SingleProduct = lazy(() => import("./pages/SingleProduct.jsx"));
const Profile = lazy(() => import("./pages/Profile"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<SingleProduct />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
