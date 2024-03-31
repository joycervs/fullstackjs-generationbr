import { Pessoa } from "./Pessoa";

export abstract class Atleta extends Pessoa {

    constructor (nome: string){
        super(nome);
    }

    public abstract aquecer(): void;

}