import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    // console.log({ isLoading });

    return (
        <>
            <h3>{ category } </h3>
            {/* {
                isLoading ?
                (<h2>Cargando...</h2>)
                : null
            } */}
            {
                isLoading && <h2>Cargando...</h2>
            }
            

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            { ...image } // Esto lo que hace es que exparse todas las propiedades es decir envia todas las propiedades de image
                            // title={image.title}
                            // url={image.url}
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}