import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas 02-template-string', () => { 
    test('getSaludo debe retornar "Hola Hugo"', () => { 
        const name = 'Hugo';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
 });