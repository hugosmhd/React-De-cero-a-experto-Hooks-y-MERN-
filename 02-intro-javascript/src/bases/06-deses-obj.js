// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre:nombre2 } = persona;
// console.log(nombre2);
// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContexto = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// const { nombreClave, anios, latlng:{ lat, lng } } = usarContexto(persona);
const { nombreClave, anios, latlng } = usarContexto(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);