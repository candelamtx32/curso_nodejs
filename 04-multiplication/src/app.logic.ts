import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b: base, l: limit, s: showTable } = yarg;


//bucle
let outputMessage: string = '';
const header: string = '==================================== \n'
    + 'Tabla del ' + base + '\n==================================== \n';
let output: string = '';

for (let i = 1; i <= limit; i++) {
    output += `${base} x ${i} = ${base * i}\n`;
}

// grabar en el archivo de salida
// path: outputs/tabla_5.txt

outputMessage = header + output;
if (showTable) {
    console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('Archivo creado');
