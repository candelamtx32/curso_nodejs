import fs from 'fs';
//bucle
const base = 5;
let outputMessage = '';
const header = '==================================== \n'
    + 'Tabla del ' + base + '\n==================================== \n';
let output = '';
for (let i = 1; i <= 10; i++) {
    output += `${base} x ${i} = ${base * i}\n`;
}
// grabar en el archivo de salida
// path: outputs/tabla_5.txt
outputMessage = header + output;
console.log(outputMessage);
const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla_${base}.txt`, outputMessage);
console.log('Archivo creado');
