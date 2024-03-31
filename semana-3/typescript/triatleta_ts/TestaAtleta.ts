import { Ciclista } from './Ciclista';
import { Corredor } from './Corredor';
import { Nadador } from "./Nadador";

export function main() {

    const ciclista: Ciclista = new Ciclista("Natália");
    ciclista.visualizar();
     
    const corredor: Corredor = new Corredor("Mariana");
    corredor.visualizar();

    const nadador: Nadador = new Nadador("Niedja");
    nadador.visualizar();
    
}

main();
