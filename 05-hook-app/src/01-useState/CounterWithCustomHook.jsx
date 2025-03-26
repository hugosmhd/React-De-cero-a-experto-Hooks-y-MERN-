import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
    const { 
        counter: counter1, 
        increment: increment1, 
        decrement: decrement1, 
        reset: reset1 
    } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <h1>Counter with Hook: {counter1}</h1>

            <hr />

            <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        </>
    )
}
