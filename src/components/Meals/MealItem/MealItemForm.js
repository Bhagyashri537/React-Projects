import classes from './MealItemForm.module.css'
const MealItemForm =  () => {
    return (
        <>
       <div className={classes.form}>
        <h3>Amount</h3>
        <div>
            <button className={classes.button}>+Add</button>
        </div>
       </div>
        
        </>
    )

}
export default MealItemForm