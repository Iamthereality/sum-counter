import React, { FC, useState } from 'react';
import './App.css';
import { IAppProps } from "../interfces/app.interface";

export const App: FC<IAppProps> = ({propsCounter}): JSX.Element => {
  const [prevCounter, setPrevCounter] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [sumCount, setSumCount] = useState<number>(0);

  const updateCounter = () => {

    setPrevCounter(counter)

    setCounter(counter + 1);

    setSumCount(propsCounter + prevCounter)
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Counter: <b data-testid="counter">{counter}</b></h2>
      <div>
        Значение <b>SumCounter</b> должно вычисляться на основании предыдущего
        значения <b>counter</b> и <b>propsCounter</b>
      </div>
      <h2>SumCounter: <b data-testid="sumCount">{sumCount}</b></h2>
      <button onClick={updateCounter}>+</button>
    </div>
  );
}
