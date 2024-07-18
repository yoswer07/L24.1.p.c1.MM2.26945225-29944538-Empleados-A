export default class Cl_Empresa {
  constructor() {
    this.auxSueldo = 10000;
    this.nombreMenor = '';
    this.acumMonto = 0;
    this.contAdmin = 0;
  }

  //metodos
  procesarEmpleado(emp) {
    if (this.auxSueldo > emp.sueldo) {
      this.auxSueldo = emp.sueldo;
      this.nombreMenor = emp.nombre;
    }
   
    if(emp.tipo == 2) {
        this.acumMonto += emp.sueldo;
        this.contAdmin ++;
    }
  }
  devolverNombreSueldo() {
    return this.nombreMenor;
  }
  devolverMontoPromedio() {
    return this.acumMonto / this.contAdmin;
  }
}
