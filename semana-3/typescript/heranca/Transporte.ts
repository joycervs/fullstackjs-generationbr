export class Transporte{
  private _capacidade: number;

	constructor(_capacidade: number) {
		this._capacidade = _capacidade;
	}


    /**
     * Getter capacidade
     * @return {number}
     */
	public get capacidade(): number {
		return this._capacidade;
	}

    /**
     * Setter capacidade
     * @param {number} value
     */
	public set capacidade(value: number) {
		this._capacidade = value;
	}

public visualizar(): void{
      console.log("****************************************");
      console.log("Meio de Transporte");
      console.log("****************************************");
      console.log("Capacidade: " + this._capacidade);


}

}