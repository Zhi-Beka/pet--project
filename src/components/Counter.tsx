import React, { useState } from "react";
import styles from "./Components.module.scss";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={increment} className={styles.btn}>
        increment
      </button>
    </div>
  );
};

export default Counter;
