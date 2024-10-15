import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Consulta } from "./Consulta";

let medico:Medico
let paciente:Paciente
beforeEach(() => {
    medico = new Medico("Cristiano Ronaldo","123456","Cardiologista");
    paciente = new Paciente("Luana",24);
})

describe('Consulta', () => {
   test('Verificando data atual', () => {
    const consulta = new Consulta(medico,new Date('2024-10-10'),paciente)
    expect(consulta.dataC.getTime()).toBe(new Date('2024-10-10').getTime());
   })

   test("Verificando data menor que data atual", () => {
    const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
    expect(consulta.dataC.getTime()).not.toBe(new Date('2024-10-01').getTime()); // O teste deve passar
   });

   test("Verificando data maior que data atual", () => {
    const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
    expect(consulta.dataC.getTime()).not.toBe(new Date('2024-10-25').getTime()); // O teste deve passar
   });

   test("Verificando data maior que data limite", () => {
    const consulta = new Consulta(medico, new Date('2024-10-10'), paciente);
    expect(consulta.dataC.getTime()).not.toBe(new Date('2025-05-25').getTime()); // O teste deve passar
   });
})