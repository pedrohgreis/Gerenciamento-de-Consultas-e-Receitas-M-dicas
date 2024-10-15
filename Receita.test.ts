import { Receita } from "./Receita";
import { Consulta } from "./Consulta";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

describe('paciente', () =>{

    let paciente:Paciente
    let consulta: Consulta
    beforeEach(() => {
    paciente = new Paciente("Luana",24);
    consulta = new Consulta(new Medico("Joao","123456","Cardiologista"),new Date('2024-11-05'), paciente)
})

    test("Verificando mediciamento", () => {
        const receita1 = new Receita("Dipirona", consulta);
        expect(receita1.medicamentos).toBe("Dipirona");
    })

})