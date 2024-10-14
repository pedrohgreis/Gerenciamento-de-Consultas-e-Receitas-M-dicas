import { Consulta } from "./Consulta";

export class Receita {
    private _medicamentos: string;
    private consulta: Consulta;
    private _dataReceita;

	constructor(medicamentos: string, $consulta: Consulta) {
		this._medicamentos = medicamentos;
		this.consulta = $consulta;
	}

	public get medicamentos(): string {
		return this._medicamentos;
	}

	public get $consulta(): Consulta {
		return this.consulta;
	}

	public set medicamentos(value: string) {
		this._medicamentos = value;
	}

	public set $consulta(value: Consulta) {
		this.consulta = value;
	}

    private verificarData(){ //verifica se é a mesma que a da consulta
        if(this._dataReceita == this.consulta.dataC){
            console.log('Consulta Marcada');   
        } else{
            throw new Error('Erro! Data da Receita difere da Data da Consulta.');
        }
    }
}