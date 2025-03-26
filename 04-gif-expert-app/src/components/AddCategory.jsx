import { useState } from 'react';
import PropTypes from 'prop-types';

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        // setInputValue('Hola mundo');
        setInputValue(target.value);
    }

    // const onSubmit = (event) => {
    //     // console.log(event);
    //     event.preventDefault();
    //     if (inputValue.trim().length <= 1) return;
    //     // console.log(inputValue);

    //     setCategories(cat => [inputValue, ...cat]);
    //     setInputValue('');
    // }
    const onSubmit = (event) => {
        // console.log(event);
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // console.log(inputValue);

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}