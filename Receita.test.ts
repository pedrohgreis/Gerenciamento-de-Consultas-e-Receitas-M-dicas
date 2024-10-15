import { Receita } from "./Receita";
import { Consulta } from "./Consulta";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

describe('paciente', () =>{

    test("Verificando mediciamento", () => {
        const receita1 = new Receita("Dipirona",new Consulta(new Medico("Joao","123456","Cardiologista"),new Date("2024-11-05"),new Paciente("Lucas",25)));
        expect(receita1.medicamentos).toBe("Dipirona");
    })

})