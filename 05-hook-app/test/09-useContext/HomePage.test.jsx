import { render, screen } from '@testing-library/react';
import { UserContex } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Hugo'
    }

    test('Debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContex.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContex.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre'); // aria-label
        // console.log(preTag.innerHTML);
        expect( preTag.innerHTML ).toBe( 'null' );
    });

    test('debe de mostrar el componente CON el usuario', () => {
        
        render( 
            <UserContex.Provider value={{ user }}>
                <HomePage /> 
            </UserContex.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
        // screen.debug()
    });

});