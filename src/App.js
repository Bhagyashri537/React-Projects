import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App () {

    const expense = [
        {
            id:"e1",    
            title:"Car Insurance",
            amount:200,
            date:new Date(2023,0,11),
           
        },
        {
            id:"e2",   
            title:"Television",
            amount:300,
            date:new Date(2023,1,12),
            
        },
        
        {
            id:"e3",
            title:"Desk",
            amount:300,
            date:new Date(2023,1,22),
           
        },
        {
            id:"e4",
            title:"Table Lamp",
            amount:50,
            date:new Date(2023,1,22),
           
        }

    ]
    return (
        <div>
            <NewExpense/>
        {expense.map(item => {
         return<ExpenseItem 
           title={item.title} 
           amount={item.amount} 
           date={item.date} 
           >
           </ExpenseItem>
        })}
      </div>
      );
    
}
export default App;