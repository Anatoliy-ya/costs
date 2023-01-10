
import './Costs.css'
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import { useState } from "react";
import { CostList } from "./CostList";
import { CostsDiagram } from './CostsDiagram';


export const Costs = (props) => {
   const [ selectedYear, setSelectedYear] = useState('2022')
   
   const dataYears= (year) => {
      setSelectedYear(year)
      console.log(year)
   };

   const filteredCosts = props.costs.filter((e) => {
         return e.date.getFullYear().toString() === selectedYear
      });

   return (
      <div>
         <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={dataYears} />
            <CostsDiagram costs={filteredCosts} />
            <CostList costs={filteredCosts} />
         </Card>
      </div>
   );
};








