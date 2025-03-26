import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHook';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        });

        render(<MultipleCustomHook />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pókemon'));

        const nextButton = screen.getByRole('button', { name:  'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();

        // screen.debug();
    });
    
    test('Debe de mostrar un pokemon', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
                }
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHook />);
        // screen.debug();
        expect(screen.getByText('#1 - bulbasaur')).toBeTruthy();
    });

    test('Debe de llamar la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
                }
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        

        render(<MultipleCustomHook />);
        const nextButton = screen.getByRole('button', { name:  'Siguiente' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })
})