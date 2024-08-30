"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = exports.rl = void 0;
exports.rl = require("readline-sync");
var Contador = /** @class */ (function () {
    function Contador(valorContador) {
        this.valorContador = valorContador;
    }
    //Começo o contador zerando ele
    Contador.prototype.zerar = function () {
        this.valorContador = 0;
    };
    // Incrimento em um em um
    Contador.prototype.incrementar = function () {
        this.valorContador += 1;
        // OU this.valorContador = this.valorContador + this.valorContador 
    };
    //Retorna o Valor atual do Contador
    Contador.prototype.valor = function () {
        return this.valorContador;
    };
    return Contador;
}());
exports.Contador = Contador;
function criarContador() {
    var valorCriado = exports.rl.questionInt("Defina o valor inicial do contador: ");
    return new Contador(valorCriado);
}
var contador1 = criarContador();
var menu = true;
while (menu) {
    var opcao = exports.rl.questionInt('Insira o numero da opcao desejada:\n1 - Definir Valor Inicial\n2 - Visualizar Contador\n3 - Incrementar Contador\n4 - Zerar Contador\n5 - Sair\n');
    switch (opcao) {
        case 1:
            contador1 = criarContador();
            break;
        case 2:
            console.log("Valor do Contador:", contador1.valor());
            break;
        case 3:
            contador1.incrementar();
            break;
        case 4:
            contador1.zerar();
            break;
        case 5:
            menu = false;
            break;
        default:
            console.log("Oppco invalida. Tente novamente.");
            break;
    }
}
console.log("Programa encerrado.");
