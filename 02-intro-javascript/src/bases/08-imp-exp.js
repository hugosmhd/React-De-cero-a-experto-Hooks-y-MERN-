// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'; // imp
import heroes, { owners } from '../data/heroes';
// import { heroes, owners } from './data/heroes';

// console.log(owners);

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

export const getHeroesById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroesById(2));

export const getHeoresByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeoresByOwner('Marvel'));