const { getUUid, getAge } = require('../plugins/index.js')


const buildMakePerson = ({ getUUid, getAge }) => {

    return ({ name, birthDate }) => {
        return {
            id: getUUid(),
            name: name,
            birthDate: birthDate,
            age: getAge(birthDate),
        }
    }
}

// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson
}