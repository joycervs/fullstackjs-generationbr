import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{
      private _cor: string;
      private _numeroPortas: number;
      private _placa: string;
      private _marchas:number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number, 
    cor: string, numeroPortas: number, placa: string, marchas: number) {
    super(capacidade, numeroRodas, velocidade)
		this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._placa = placa;
		this._marchas = marchas;
	}


    /**
     * Getter cor
     * @return {string}
     */
	public get cor(): string {
		return this._cor;
	}

    /**
     * Getter numeroPortas
     * @return {number}
     */
	public get numeroPortas(): number {
		return this._numeroPortas;
	}

    /**
     * Getter placa
     * @return {string}
     */
	public get placa(): string {
		return this._placa;
	}

    /**
     * Getter marchas
     * @return {number}
     */
	public get marchas(): number {
		return this._marchas;
	}

    /**
     * Setter cor
     * @param {string} value
     */
	public set cor(value: string) {
		this._cor = value;
	}

    /**
     * Setter numeroPortas
     * @param {number} value
     */
	public set numeroPortas(value: number) {
		this._numeroPortas = value;
	}

    /**
     * Setter placa
     * @param {string} value
     */
	public set placa(value: string) {
		this._placa = value;
	}

    /**
     * Setter marchas
     * @param {number} value
     */
	public set marchas(value: number) {
		this._marchas = value;
	}

  public calcularIpva(valor: number):void{
    let aliquota = super.calcularAliquota(1.5);
    console.log(`\nO valor do IPVA é: ${valor * aliquota}`);
  }
  
  public visualizar(): void {
    super.visualizar()
    console.log("Cor do Automóvel: " + this._cor);
    console.log("Numero de Portas: " + this._numeroPortas);
    console.log("Placa: " + this._placa);
    console.log("Numero de Marchas: " + this._marchas);
  }
}