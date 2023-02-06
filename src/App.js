import { useState } from "react";
import Body from "./components/Body";
import UserList from "./components/Userlist";



function App(){

  const [usersList, setUsersList] = useState([])

  const userHandler = (userName, userAge, userCollege) =>{
      setUsersList((preList) => {
        return [...preList, {name:userName, age:userAge, college:userCollege, id:Math.random().toString()}];
      })
  }
  return (
    <>
        <Body onAddUser={userHandler}/>
        <UserList users={usersList}/>
        </>
  );
}

export default App;







