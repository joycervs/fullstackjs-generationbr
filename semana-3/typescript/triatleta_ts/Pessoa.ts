export abstract class Pessoa {

    private _nome: string;

    constructor (nome: string){
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados do Atleta             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }

    
}