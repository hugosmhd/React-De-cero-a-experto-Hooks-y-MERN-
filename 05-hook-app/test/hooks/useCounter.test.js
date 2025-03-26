const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en el useCounter', () => {

    test('debe de retonar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103);
    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97);
    });

    test('debe de realizar el reset', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, reset } = result.current;

        act(() => {
            decrement(2);
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
});