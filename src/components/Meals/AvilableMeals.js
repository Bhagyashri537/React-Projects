  import classes from './AvailableMeals.module.css'
  const Dummy_Meals = [
    {
        id:"a1",
        name: "Sushi",
        info: "Finest Fish and Vegies",
        prize: "$ 22.99"
    },
    {
        id:"a2",
        name: "Schnitzel",
        info: "A German Speciality",
        prize: "$ 16.50"
    },
    {
        id:"a3",
        name: "Barbecue Burger",
        info: "American, raw, meaty",
        prize: "$ 22.99"
    },
    {
        id:"a4",
        name: "Green Bowl",
        info: "Healthy and Green",
        prize: "$ 13.99"
    },
]

const AvailableMeals = () => {
    //const list  = Dummy_Meals.map(meals => <li>{meals.name}</li>)
    return (
        <>
         {Dummy_Meals.map((meals) => {
            return(

                <ul className={classes.meal}>
                   <li>{meals.name}</li>
                   <li>{meals.info}</li>
                   <li>{meals.prize}</li>
                </ul>
               
            )
            
         })}
        </>
    )

}
export default AvailableMeals

