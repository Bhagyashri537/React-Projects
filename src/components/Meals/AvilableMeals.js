  import classes from './AvailableMeals.module.css'
  import Card from '../UI/Card'
  import MealItem from './MealItem/MealItem'
  const Dummy_Meals = [
    {
        id:"a1",
        name: "Sushi",
        info: "Finest Fish and Vegies",
        price: "$ 22.99"
    },
    {
        id:"a2",
        name: "Schnitzel",
        info: "A German Speciality",
        price: "$ 16.50"
    },
    {
        id:"a3",
        name: "Barbecue Burger",
        info: "American, raw, meaty",
        price: "$ 22.99"
    },
    {
        id:"a4",
        name: "Green Bowl",
        info: "Healthy and Green",
        price: "$ 13.99"
    },
]

const AvailableMeals = () => {
    const list  = Dummy_Meals.map(meals => 
        <MealItem
        key={meals.id}
        name = {meals.name}
        info={meals.info}
        price={meals.price}
        />)
    return <section  className={classes.meals}>
        <Card>
            <ul>
                {list}
            </ul>
        </Card>
       </section>
    

}
export default AvailableMeals

