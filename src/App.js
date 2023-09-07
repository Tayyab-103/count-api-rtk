import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Counterapp from "./components/Counterapp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.product);

  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log("State", state);

  if (product?.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Counterapp />} />
          <Route path="/products" element={<Cards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
