export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}


export class CreateTable implements CreateTableUseCase {
    constructor() {
        /**
         * DI - DEPENDENCY INJECTION
         * 
         * En lugar de crear la instancia de logger dentro del caso de uso,
         * la inyectamos desde fuera.
         */
    }

    // Cada caso de uso va a tener un método execute, otras veces es con run
    execute({ base, limit = 10 }: CreateTableOptions) {
        let output: string = '';
        for (let i = 1; i <= limit; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
        }
        return output;
    }
}