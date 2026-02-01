const { getUUid, getAge } = require('./plugins')

// const {buildMakePerson} = require('./js_foundation/05_factory.js');


const getPokemonById = require('./js_foundation/06_promises');
// console.log(getPokemonById(4));

// getPokemonById(4)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('Finalmente'))


const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js'); // Este es el archivo-servicio que yo estoy mandando a llamar

logger.log('Hola');
logger.error('Error');

// ! Referencia a ña función factory y uso
// const makePerson = buildMakePerson({ getUUid, getAge});
// const obj = {name: 'John', birthDate: '2005-08-17'};
// const john = makePerson(obj);
// console.log(john);
