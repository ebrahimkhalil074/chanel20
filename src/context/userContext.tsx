import { createContext, ReactNode } from "react";
 type TValue ={
    name:string
 }
 export const UserContext =createContext<TValue | undefined> (undefined)
const UserProvider =({children}: { children: ReactNode })=>{
    

    const values:TValue ={
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