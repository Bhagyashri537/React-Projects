
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
//import ExpenseDetail from './ExpenseDetail';
import './ExpenseItem.css';




function ExpenseItem(props){

   const [title,setTitle]  = useState(props.title)
   const [amount,setAmount]  = useState(props.amount)

   

   const eventHanler = () => {
    setTitle('updated!')
    console.log("title!")
   }
   const eventHandler2 = () => {
    setAmount('100')

   }

  
    return (
        <div className='expense-item'>
             <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
            <h2>{title}</h2>    
            <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={eventHanler}>Change title</button>
            <button onClick={eventHandler2}>Change Expense</button>
            {/* <button onClick={eventHanler2}>Delete Expense</button> */}
        </div>
    )
}

 
 export default  ExpenseItem
  
 
 
  

