import { useContext } from 'react';
import { UserContex } from './context/UserContext';


export const HomePage = () => {

    const { user } = useContext(UserContex);

    return (
        <>
            <h1>HomePage <small>{user?.name}</small></h1>
            <hr />

            <pre aria-label='pre'>
                { JSON.stringify(user, null, 3) }
            </pre>
        </>
    )
}
