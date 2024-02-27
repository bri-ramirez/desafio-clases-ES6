// Importamos las clases de cliente e impuestos
import Cliente from "./Cliente";
import Impuestos from "./Impuestos";

// creamos una instancia de la clase Impuestos
const impuestos = new Impuestos();

// asignamos los valores para el monto bruto anual y deducciones
impuestos.monto_bruto_anual = 1000;
impuestos.deducciones = 200;

// creamos una instancia de la clase usuario, y le asignamos el nombre en el constructor
const cliente = new Cliente("Briggitte Ramirez");

// asignamos el objeto "impuestos" a la propiedad "impuesto" del objeto cliente
cliente.impuesto = impuestos;

// obtenemos el calculo del impuesto
const resultadoImp9uestos = cliente.calcularImpuesto();

// mostramos los resultados
console.log(`El cliente ${cliente.nombre}, debe pagar $${resultadoImp9uestos} de impuestos.`)