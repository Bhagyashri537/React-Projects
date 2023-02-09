import React,{useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogOut: ()=>{},
    onLogin: (email,password)=>{}
})

 export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

   useEffect (() => {
    const storedUserLogginInfo = localStorage.getItem('isLoggedIn') 
    if(storedUserLogginInfo === '1'){
       setIsLoggedIn(true)
    }

   },[])

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
    }

    const loginHandler=() => {
        localStorage.setItem("isLoggedIn", '1')
        setIsLoggedIn(true)
    }
    return <AuthContext.Provider value = {{
        isLoggedIn: isLoggedIn,
        onLogOut:logoutHandler,
        onLogin:loginHandler
    }}>{props.children}</AuthContext.Provider>
}
export default AuthContext