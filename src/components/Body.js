import { useState, useReducer } from "react";
import Card from "./Card";

const collegeInfoReucer = (state, action) => {
    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.includes('college')}
    }
    return {value: '' , isValid:true}
}

const Body = (props) => {

    const [enterUser, setEnterUser] = useState('')
    const [enterAge, setEnterAge] = useState('')
    // const [enterCollege, setEnteredCollege] = useState('')
    // const [collegeName, setCollegeName] = useState(false)

    const [collegeState, dispatchCollegeName] = useReducer(collegeInfoReucer, {
        value:'',
        isValid: true
    })

    // useEffect(() => {
    //     setCollegeName(
    //         enterCollege.includes('college')
    //     )
    // },[enterCollege])
    

    const userNameHandler = (event) => {
        setEnterUser(event.target.value);
       

    }

    const ageHandler = (event) => {
        setEnterAge(event.target.value);
    }

    const collegeHandler = (event) => {
        //setEnteredCollege(event.target.value)
        dispatchCollegeName({ type: 'USER_INPUT', val:event.target.value}
                    
                 
            )
       

    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enterUser.trim().length === 0 || enterAge.trim().length === 0 || collegeState.value === true){
            return;
        } 
        if(+enterAge <1){
            return;
        }
        props.onAddUser(enterUser,enterAge,collegeState.value)
        setEnterUser('');
        setEnterAge('');
        //setEnteredCollege('');
        //setCollegeName(true)
        //console.log(state)
       
    }
    
   return(
    <>
    <Card className="card">
   <form  className="form"onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" value={enterUser} onChange={userNameHandler}/>
    <label htmlFor="username">Age(Years)</label>
    <input type="number" id="age" value={enterAge} onChange={ageHandler}/>
    <label>College Name</label>
    <input type="text" id="college" value={collegeState.value} onChange={collegeHandler}/>
    <button type="submit">Add Users</button>
   </form>
   </Card>
   </>
   )
}
export default Body;