import './NewForm.css';
import { useState } from 'react';

const NewForm = (props) => {

    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');

   const  titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    }

   const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
   }

   const dateHandler = (event) => {
    setEnteredDate(event.target.value);
   }

   const submitHandler = (event) => {
     event.preventDefault();

     const expenseData = {
         title:enterTitle,
         amount: +enterAmount,
         date: new Date(enterDate)
     }
     props.onSaveExpenseData(expenseData)
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');
   }
 
   return (
   <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
         <label>Title</label>
         <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
         <label>Amount</label>
         <input type="number" min="0.01" step="0.01" onChange={amountHandler}/>
        </div>
        <div className='new-expense__control'>
         <label>Date</label>
         <input type="date" min="2019-10-6" max="2022-9-6" onChange={dateHandler}/>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </div>
   </form>
   )
}
export default NewForm;