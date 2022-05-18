import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext([]);

async function fetchUser(data) {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/users?email=${data.email}`)
    let usuario = await resp.json()

    return usuario

}

const DataProvider = ({ children }) => {
    const [usuario, setUsuario] = useState();
    const loginContext = (data) => {
        fetchUser(data)
            .then(function (user) {
                console.log(user);
                setUsuario(user)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return (
        <DataContext.Provider value={{ usuario, loginContext }}>
            {children}
        </DataContext.Provider>
    )
    
}
export const useData =()=>{
    return useContext(DataContext)
}

export default DataProvider