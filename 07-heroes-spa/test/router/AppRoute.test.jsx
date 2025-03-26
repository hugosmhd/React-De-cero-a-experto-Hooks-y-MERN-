import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRoute />', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
    })

    test('debe de mostrar el componente de Marvel si está autenticado', () => {
    
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

        

    });
})