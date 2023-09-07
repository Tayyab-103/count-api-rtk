import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/counterSlice";
import { useNavigate } from "react-router-dom";

const Counterapp = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const routeChange = () => {
    Navigate("/products");
  };
  return (
    <>
      <button className="btn btn-info float-left my-2" onClick={routeChange}>
        {" "}
        Product page{" "}
      </button>
      <h1 className="text-center my-2">Counter App Using Redux-Toolkit</h1>
      <div className=" container my-5 text-center d-flex align-items-center justify-content-center vh-100">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Counter App</h1>

          <h2>{counter}</h2>
          <button
            className="btn btn-success mx-3"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="btn btn-warning mx-3"
            onClick={() => dispatch(decrement())}
            disabled={counter === 0}
          >
            Decrement
          </button>
          <button
            className="btn btn-secondary mx-3"
            onClick={() => dispatch(reset())}
            disabled={counter === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counterapp;
