import { fireEvent, render, screen } from "@testing-library/react";
import { UserContex } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContex.Provider value={{ user: null }}>
                <LoginPage />
            </UserContex.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

    });


    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        
        const setUserMock = jest.fn();

        render(
            <UserContex.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContex.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan Perez"})


    });


});