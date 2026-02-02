"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    }
];
const findHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
};
const hero = findHeroeById(1);
console.log((hero?.name ?? 'No hero found'));
