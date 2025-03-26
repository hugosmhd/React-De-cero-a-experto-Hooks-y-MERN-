import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // usestatesnippet
  const [categories, setCategories] = useState(['One Punch']);
  // console.log(categories);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // console.log('Valorant');
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant']);
  }

  return (
    <>  
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* <AddCategory setCategories={setCategories} /> */}
        {/* cuando lleva el on es porque comunmente esta emitiendo algo, comun en los eventos */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        
        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        {
          categories.map(category => (
            <GifGrid 
              key={ category } 
              category={ category } />
          ))
        }
        {/* Gif Item */}
    </>
  )
}
