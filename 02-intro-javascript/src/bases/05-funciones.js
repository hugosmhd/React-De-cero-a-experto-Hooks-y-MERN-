// Funciones en JS

// const saludar = function(nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// saludar = 30;

// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// Aqui hay que poner parentesis para especificar que es lo que se va a retornar
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Pin1502',
})

const user = getUser();
console.log(user);

// Tarea

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Hugo');
console.log(usuarioActivo);