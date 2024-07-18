/* En una empresa se tiene personal obrero y personal administrativo. 
La empresa necesita determinar cuál es alguno de los nombres del personal que gana menos 
(si no se repite, sólo reportar 1, si se repite, reportar cualquiera) y también el monto promedio 
pagado sólo los administrativos.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana $50, 
Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150:  */

import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

//instanciar el objeto
let empleado = new Cl_Empleado("Juan", 1, 100);
let empleado2 = new Cl_Empleado("Ana", 1, 50);
let empleado3 = new Cl_Empleado("Lin", 2, 200);
let empleado4 = new Cl_Empleado("Mary", 1, 50);
let empleado5 = new Cl_Empleado("Carlos", 2, 150);


let empresa = new Cl_Empresa();
empresa.procesarEmpleado(empleado);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Uno de los que gana menos = ' + empresa.devolverNombreSueldo();
salida.innerHTML += '<br> Monto promedio pagado a administrativos = ' + empresa.devolverMontoPromedio() + '$';