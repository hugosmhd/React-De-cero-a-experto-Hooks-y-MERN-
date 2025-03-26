import { getHeroesById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despues');
//         // resolve();
//         const p1 = getHeroesById(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 segundos despues');
            // resolve();
            const p1 = getHeroesById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    // .then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    .catch(console.warn);
    // .catch(err => console.warn(err));