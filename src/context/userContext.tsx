import { createContext, ReactNode } from "react";

 export const UserContext =createContext(undefined)
const UserProvider =({children}: { children: ReactNode })=>{
    

    const values ={
        name:'fg'
    }
    return(
        <UserContext.Provider value={values}>
   {children}
        </UserContext.Provider>
    )
}
export const useUser =()=>{
    
}

export default UserProvider;