import React from "react";

const UserList = (props) => {
    console.log(props)
    return (
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                  {user.name}({user.age} years old )
                  (studied at {user.college})
                </li>
            ) )}
        </ul>
    )
}

export default UserList;