import { useContext } from "react"
import { UserContex } from "./context/UserContext";


export const LoginPage = () => {

    const { user, setUser } = useContext(UserContex);
    // console.log(hola, user);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify(user, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Juan Perez', email: 'juan@google.com' })}
            >
                Establecer usuario
            </button>
        </>
    )
}
