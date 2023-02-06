import { useState } from "react";
import Card from "./Card";

const Body = (props) => {

    const [enterUser, setEnterUser] = useState('')
    const [enterAge, setEnterAge] = useState('')

    const userNameHandler = (event) => {
        setEnterUser(event.target.value);
       

    }

    const ageHandler = (event) => {
        setEnterAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enterUser.trim().length === 0 || enterAge.trim().length === 0){
            return;
        } 
        if(+enterAge <1){
            return;
        }
        props.onAddUser(enterUser,enterAge)
        setEnterUser('');
        setEnterAge('');
    }
    
   return(
    <>
    <Card className="card">
   <form  className="form"onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" value={enterUser} onChange={userNameHandler}/>
    <label htmlFor="username">Age(Years)</label>
    <input type="number" id="age" value={enterAge} onChange={ageHandler}/>
    <button type="submit">Add Users</button>
   </form>
   </Card>
   </>
   )
}
export default Body;