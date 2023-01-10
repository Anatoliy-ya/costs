import './CostForm.css';
import { useState } from 'react';



export const CostForm = (props) => {
   
   const [inputDescription, setInputName] = useState('');
   const [inputAmount, setInputAmount] = useState('');
   const [inputDate, setInputDate] = useState('');

   // const [userInput, setUserInput] = useState({
   //    name: '',
   //    amount: '',
   //    date: '',
   // });
   
   const nameChangeHandler = (event) => {
      setInputName(event.target.value)
      // setUserInput ((previousState) => {
      //    return {
      //       ...previousState,
      //       name: event.target.value
      //    }
      // })
   };

   const amountChangeHandler = (event) => {
      setInputAmount(event.target.value)
      // setUserInput ({
      //    ...userInput,
      //    amount:event.target.value
      // })
   }

   const dateChangeHandler = (event) => {
      setInputDate(event.target.value)
      // setUserInput ({
      //    ...userInput,
      //    date:event.target.value
      // })
   }

   const submitHandler = (event) => {
      event.preventDefault();

      const costDate = {
         description: inputDescription,
         amount: inputAmount,
         date: new Date(inputDate),
         
      }
      props.onSaveCostData(costDate)
      setInputName('')
      setInputAmount('')
      setInputDate('')
   }

   const close = () => {
      props.onClose({display: 'none'})
   }

   return (
      <div>
         <form onSubmit={submitHandler}>
            <div className="new-cost__controls" >
               <div className='new-cost__control'>
                  <label>Название</label>
                  <input value={inputDescription} type='text' 
                  onChange={nameChangeHandler}/>
               </div>
               <div className='new-cost__control'>
                  <label>Сумма</label>
                  <input value={inputAmount} type='number' min='0.01' step='0.01' 
                  onChange={amountChangeHandler}/>
               </div>
               <div className='new-cost__control'>
                  <label>Дата</label>
                  <input value={inputDate} type='date' nim='2019-01-01' 
                  step='2022-12-29' onChange={dateChangeHandler}/>
               </div>
               <div className='new-cost__actions'>
                  <button type='submit' onClick={close}>Добавить расход</button>
                  <button type='button' onClick={close}>Отмена</button>
               </div>
            </div>
         </form>
      </div>
   );
};









