import { yarg } from "./config/plugins/yargs.plugin.js";


// console.log(process.argv)

// console.log(yarg.b);


(async () => {
    await main();
})();

async function main() {
    console.log(yarg);
}
