import { useEffect, useState } from "react"
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'hugo@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }


    useEffect(() => {
        // console.log('useEffect called!');
    }, []);


    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);
    
    

    return (
        <>
            <h1>Fromulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="example@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
