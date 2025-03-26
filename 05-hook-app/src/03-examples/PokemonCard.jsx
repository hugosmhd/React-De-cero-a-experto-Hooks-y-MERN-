

import React, { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {


    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0,
    })

    useLayoutEffect(() => {
        // console.log(pRef.current.getBoundingClientRect());
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height,
        })
    }, [name])

    return (
        // <section style={{ height: 200 }}>
        <>
            <section style={{ display: 'flex' }}>
                <h2 ref={pRef} className='text-capitalize'>#{id} - {name}</h2>

                {/* Imagenes */}
                <div>
                    {
                        sprites.map(sprite => (
                            <img key={sprite} src={sprite} alt={name} />
                        ))
                    }
                </div>
            </section>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
