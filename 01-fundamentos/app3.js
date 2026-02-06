
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;
const wordsContent = content.split(' ');
//const reactWordCount = 0;

// for(i=0; i < wordCount ; i++){
//     if(wordsContent[i].toLowerCase == 'react'){
//         reactWordCount = reactWordCount + 1;
//     }
// }

const reactWordCount = content.match(/react/gi ?? []).length;

// console.log('Palabras:', wordCount)
console.log('Palabras React:', reactWordCount)
