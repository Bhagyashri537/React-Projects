import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {

   const expense = [
    {
        id:"e1",    
        title:"Car Insurance",
        amount:200,
        date:new Date(2023,0,11),
        location :"Nagpur"
    },
    {
        id:"e2",   
        title:"Television",
        amount:300,
        date:new Date(2023,1,12),
        location :"Sadar,Nagpur"
    },
    
    {
        id:"e3",
        title:"Desk",
        amount:300,
        date:new Date(2023,1,22),
        location :"Nagpur Bazar"
    }
   ]

  return (
    <div>
    {expense.map(item => {
     return<ExpenseItem 
       title={item.title} 
       amount={item.amount} 
       date={item.date} 
       location={item.location}>
       </ExpenseItem>
    })}
  </div>
  );
}

export default App;
