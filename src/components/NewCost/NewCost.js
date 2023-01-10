import { CostForm } from "./CostForm";
import './NewCost.css';
import { useState } from "react";


function NewCost (props) {

   const saveCostDataHandler = (inputCotsData) => {
      const costData = {
         ...inputCotsData,
         id: Math.random().toString()
      }
      props.onAddCost(costData)
   };
   
   let openProps = {display: 'flex'};
   let closeProps = {display: 'none'};
   const[open, setOpen] = useState(closeProps)
   
   const openForm = () => {
      setOpen(openProps)
   };

   const closeForm = () => {
      setOpen(closeProps)
   };

   return ( 
      <div className="new-cost">
         <button onClick={openForm}>Добавить Новый Расход</button>
         <div style={open}>
            <div>
               <CostForm onSaveCostData={saveCostDataHandler} 
               onClose={closeForm} />
            </div>
         </div>
      </div>
   )
};

export default NewCost;




