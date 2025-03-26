import { useState } from "react"
import { UserContex } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Hugo Martinez',
//     email: 'hugo@gmail.com',
// }


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // <UserContex.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContex.Provider value={{ user, setUser }}>
            { children }
        </UserContex.Provider>
    )
}
