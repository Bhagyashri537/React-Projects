import { useState } from "react";
import Body from "./components/Body";
import UserList from "./components/Userlist";



function App(){

  const [usersList, setUsersList] = useState([])

  const userHandler = (userName, userAge) =>{
      setUsersList((preList) => {
        return [...preList, {name:userName, age:userAge, id:Math.random().toString()}];
      })
  }
  return (
    <div>
        <Body onAddUser={userHandler}/>
        <UserList users={usersList}/>
    </div>
  );
}

export default App;
