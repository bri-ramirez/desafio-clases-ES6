"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente"));
var _Impuestos = _interopRequireDefault(require("./Impuestos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importamos las clases de cliente e impuestos

// creamos una instancia de la clase Impuestos
var impuestos = new _Impuestos["default"](1000, 200);

// creamos una instancia de la clase usuario, y le asignamos el nombre en el constructor
var cliente = new _Cliente["default"]('Briggitte Ramirez');

// asignamos el objeto "impuestos" a la propiedad "impuesto" del objeto cliente
cliente.impuesto = impuestos;

// obtenemos el calculo del impuesto
var resultadoImp9uestos = cliente.calcularImpuesto();

// mostramos los resultados
console.log("El cliente ".concat(cliente.nombre, ", debe pagar $").concat(resultadoImp9uestos, " de impuestos."));