import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{
      private _numeroRodas: number;
      private _velocidade: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
    super(capacidade);
		this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

    /**
     * Getter numeroRodas
     * @return {number}
     */
	public get numeroRodas(): number {
		return this._numeroRodas;
	}

    /**
     * Getter velocidade
     * @return {number}
     */
	public get velocidade(): number {
		return this._velocidade;
	}

    /**
     * Setter numeroRodas
     * @param {number} value
     */
	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

    /**
     * Setter velocidade
     * @param {number} value
     */
	public set velocidade(value: number) {
		this._velocidade = value;
	}

  protected calcularAliquota(percentual: number): number{
      return percentual / 100;
  }

 public visualizar(): void {
  super.visualizar();
  console.log("Numero de rodas: " + this._numeroRodas);
  console.log("Velocidade: " + this._velocidade);
}
}