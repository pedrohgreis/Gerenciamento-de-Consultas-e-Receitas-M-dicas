export class Medico{
    private _nome:string;
    private _credencial: string;

	constructor(nome: string, credencial: string) {
		this._nome = nome;
		this._credencial = credencial;
	}

	public get nome(): string {
		return this._nome;
	}

	public get credencial(): string {
		return this._credencial;
	}

	public set nome(nome: string){
		this._nome = nome;
	}

	public set credencial(credencial: string) {
		if(!isNaN(parseFloat(credencial)) && (credencial.length) === 6)
			this._credencial = credencial;
	}

}