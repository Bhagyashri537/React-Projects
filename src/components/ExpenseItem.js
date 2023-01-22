import './ExpenseItem.css';


function ExpenseItem(){
    const locationOfExpenditure = 'Nagpur';
    return (
        <div className='expense-item'>
            <div>January 21 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <h2>{locationOfExpenditure}</h2>
                <div className='expense-item__price'>$200</div>
            </div>
        </div>
    )
}

export default ExpenseItem;