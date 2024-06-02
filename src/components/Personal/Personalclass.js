// definicion de la clase Personal
export class Personal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }


}

//  // Clase base para todos los empleados de una empresa
//  class Personal {
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }

//     // Método común para todos los empleados de la empresa
//     presentarse() {
//       return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
//     }
//   }

//   // Subclase para gerente
//   class gerente extends Personal {
//     constructor(nombre, edad, especialidad) {
//       super(nombre, edad);
//       this.especialidad = especialidad;
//     }

//     // Método específico para gerentes
//     impartirClase(labor) {
//       return `${this.nombre} está inpartiendo labores ${labor}.`;
//     }
//   }

//   // Subclase para trabajadores
//   class trabajador extends Personal {
//     constructor(nombre, edad, bodega) {
//       super(nombre, edad);
//       this.bodega = bodega;
//     }

//     // Método específico para trabajadores
//     trabajar(archivo) {
//       return `${this.nombre} está archivando ${archivo}.`;
//     }
//   }

//   // Subclase para personal administrativo
//   class Administrativo extends Personal {
//     constructor(nombre, edad, cargo) {
//       super(nombre, edad);
//       this.cargo = cargo;
//     }

//     // Método específico para personal administrativo
//     realizarTareasAdministrativas() {
//       return `${this.nombre} está realizando tareas administrativas como ${this.cargo}.`;
//     }
//   }

//   const gerente1 = new gerente("Juan", 40, "junta_directiva");
//   const trabajador1 = new trabajador("cindy", "28", "bodeguista");
//   const administrativo1 = new Administrativo("María", 35, "Secretaria");

//   console.log(gerente1.presentarse());
//   console.log(gerente1.impartirClase("gerencia"));

//   console.log(trabajador1.presentarse());
//   console.log(trabajador1.trabajar("en bodega"));

//   console.log(administrativo1.presentarse());
//   console.log(administrativo1.realizarTareasAdministrativas());
