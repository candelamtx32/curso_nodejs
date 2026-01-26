const { getUUid, getAge } = require('./plugins')

// const {buildMakePerson} = require('./js_foundation/05_factory.js');


const getPokemonById = require('./js_foundation/06_promises');
console.log(getPokemonById(4));


// ! Referencia a ña función factory y uso
// const makePerson = buildMakePerson({ getUUid, getAge});
// const obj = {name: 'John', birthDate: '2005-08-17'};
// const john = makePerson(obj);
// console.log(john);

