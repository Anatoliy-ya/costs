import React from "react";
import { Costs } from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 13),
    description: 'Холодильник',
    amount: 999,
  },
  {
    id: 'c2',
    date: new Date(2021, 3, 22),
    description: 'MacBook',
    amount: 1254,
  },
  {
    id: 'c3',
    date: new Date(2022, 11, 11),
    description: 'Джинсы',
    amount: 51,
  },
]; 


function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
};

export default App;
