const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55322,
        lat: 14.3221,
        lng: 34.2551,
    }
};

// console.log(persona);
// console.table(persona);

// El operador spreed hace un clone del objeto
const persona2 = { ...persona };
persona2.nombre = 'Peter';
persona2.direccion.ciudad = 'Los Angeles';

console.log(persona);
console.log(persona2);