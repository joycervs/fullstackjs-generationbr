import { Atleta } from "./Atleta";

export class Ciclista extends Atleta {
    
    constructor (nome: string){
        super(nome);
    }
    
    public aquecer(): void {
        console.log("Aquecendo na estrada...");
    }
    
    public pedalar(): void{
        console.log("Pedalando...");
    }
}