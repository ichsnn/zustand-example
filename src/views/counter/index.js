import React from "react";
import useCounterStore from "../../store/counterStore";
import DecreaseBtn from "./components/DecreaseBtn";
import IncreaseBtn from "./components/IncreaseBtn";

import "./CounterView.css";

const CounterView = () => {
  const {count} = useCounterStore();
  console.log(count)
  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-btn-group">
        <DecreaseBtn />
        <IncreaseBtn />
      </div>
    </div>
  );
};

export default CounterView;
