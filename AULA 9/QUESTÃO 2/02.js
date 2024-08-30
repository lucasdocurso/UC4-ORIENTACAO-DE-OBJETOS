"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PontoEx = exports.PontoXY = exports.Ponto2D = void 0;
var rl2 = require("readline-sync");
var Ponto2D = /** @class */ (function () {
    function Ponto2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    // Retorna o valor inicial da coordenada X
    Ponto2D.prototype.getX = function () {
        return this.x;
    };
    // Define o valor da coordenada X
    Ponto2D.prototype.setX = function (x) {
        this.x = x;
    };
    // Retorna o valor inicial da coordenada Y
    Ponto2D.prototype.getY = function () {
        return this.y;
    };
    // Define o valor da coordenada Y
    Ponto2D.prototype.setY = function (y) {
        this.y = y;
    };
    // Define X e Y 
    Ponto2D.prototype.setCoordenada = function (x, y) {
        this.x = x;
        this.y = y;
    };
    // Novas coordenadas X e Y 
    Ponto2D.prototype.setNewPoint = function (outroPonto) {
        this.x = outroPonto.getX();
        this.y = outroPonto.getY();
    };
    // Compara se os pontos são iguais 
    Ponto2D.prototype.equals = function (outroPonto) {
        if (outroPonto.getX() === this.x && outroPonto.getY() === this.y) {
            return true;
        }
        else {
            return false;
        }
    };
    // Retorna o valor das coordenadas em string 
    Ponto2D.prototype.toString = function () {
        return "x: ".concat(this.x, ", y: ").concat(this.y);
    };
    // Calcula a distância entre este ponto e outro ponto
    Ponto2D.prototype.distancia = function (outroPonto) {
        var dx = outroPonto.getX() - this.x;
        // Valor do xRetorna - xDefinido
        // Valor inicial  0  - Novo valor que foi definido
        var dy = outroPonto.getY() - this.y;
        var d = dx + dy;
        return d; // Distância
    };
    // Cria uma cópia deste ponto
    Ponto2D.prototype.clone = function () {
        var clone = new Ponto2D(this.x, this.y); // Copia o método coordenadas
        return clone;
    };
    return Ponto2D;
}());
exports.Ponto2D = Ponto2D;
//Aqui a gente define as coordenadas que queremos no plano cartesiano
var PontoXY = /** @class */ (function (_super) {
    __extends(PontoXY, _super);
    function PontoXY(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.setCoordenada(x, y); // Define as coordenadas X e Y do ponto
        return _this;
    }
    return PontoXY;
}(Ponto2D));
exports.PontoXY = PontoXY;
//Aqui a gente define as coordenadas com base com o valor do X e Y que foram definidos na class PontoXY
var PontoEx = /** @class */ (function (_super) {
    __extends(PontoEx, _super);
    function PontoEx(outroPonto) {
        var _this = _super.call(this) || this; // Chama o construtor da classe base
        _this.setCoordenada(outroPonto.getX(), outroPonto.getY());
        return _this;
        // Define as coordenadas do ponto com base em outro ponto
    }
    return PontoEx;
}(Ponto2D));
exports.PontoEx = PontoEx;
/*
const ponto1 = new PontoXY(20, 35); // Um ponto com coordenadas (20, 35)
const ponto2 = new PontoEx(ponto1); // Um ponto com as mesmas coordenadas que ponto1

// Exibindo coordenadas
console.log(ponto1.toString()); //  x: 20, y: 35
console.log(ponto2.toString()); //  x: 20, y: 35

// Definindo novas coordenadas para ponto1
ponto1.setCoordenada(2, 5);
console.log(ponto1.toString()); //  x: 2, y: 5

// Verifica se são iguais
console.log(ponto1.equals(ponto2)); //  false (porque ponto1 foi alterado)

// Calcula distância entre ponto1 e ponto2
const distancia = ponto1.distancia(ponto2);
console.log(`Distância: ${distancia}`); // Mostra a Distância entre os pontos

// Clonando ponto1
const pontoClone = ponto1.clone();
console.log(pontoClone); //  x: 2, y: 4
*/
// Função para criar um objeto Ponto2D
function CriaXY() {
    var valorX = rl2.questionInt("Defina o Valor do X: ");
    var valorY = rl2.questionInt("Defina o Valor do Y: ");
    return new Ponto2D(valorX, valorY);
}
var ponto1 = new Ponto2D(0, 0);
var menu = true;
while (menu) {
    console.log("\n MENU: \n    0- Definir Ponto2D Inicial\n    1- Definir Valor Inicial do X\n    2- Definir Valor Inicial do Y\n    3- Definir Coordenada\n    4- Comparar Coordenadas\n    5- Valor das Coordenadas em String\n    6- Calcular Distancia \n    7- Vizualizar X\n    8- Vizalizar Y\n    9- Vizualizar Coordenada\n    10- Sair ");
    var escolha = rl2.questionInt("Escolha Uma Opecao: ");
    switch (escolha) {
        case 0:
            ponto1 = CriaXY();
            break;
        case 1: {
            var x = rl2.questionInt("Digite o valor para X: ");
            ponto1.setCoordenada(x, ponto1.getY());
            break;
        }
        case 2: {
            var y = rl2.questionInt("Digite o valor para Y: ");
            ponto1.setCoordenada(ponto1.getX(), y);
            break;
        }
        case 3: {
            var x = rl2.questionInt("Digite o valor para X: ");
            var y = rl2.questionInt("Digite o valor para Y: ");
            ponto1.setCoordenada(x, y);
            break;
        }
        case 4: {
            // Comparar Coordenadas (Você pode adicionar mais lógica aqui se necessário)
            console.log("Comparar Coordenadas n\u00E3o implementado.");
            break;
        }
        case 5: {
            console.log("Coordenadas em String: (".concat(ponto1.getX(), ", ").concat(ponto1.getY(), ")"));
            break;
        }
        case 6: {
            // Calcular Distância (Exemplo simples de distância com outro ponto)
            var outroX = rl2.questionInt("Digite o valor para X do outro ponto: ");
            var outroY = rl2.questionInt("Digite o valor para Y do outro ponto: ");
            var ponto2 = new PontoXY(outroX, outroY);
            // calcula a raiz quadrada de um número (Math.sqrt), usada para elevar um número a uma determinada potência(Math.pow)
            var distancia = Math.sqrt(Math.pow(ponto1.getX() - ponto2.getX(), 2) + Math.pow(ponto1.getY() - ponto2.getY(), 2));
            console.log("Dist\u00E2ncia: ".concat(distancia));
            break;
        }
        case 7: {
            console.log("X = ".concat(ponto1.getX()));
            break;
        }
        case 8: {
            console.log("Y = ".concat(ponto1.getY()));
            break;
        }
        case 9: {
            console.log("Coordenada: (".concat(ponto1.getX(), ", ").concat(ponto1.getY(), ")"));
            break;
        }
        case 10: {
            console.log("Saindo...");
            menu = false;
            break;
        }
        default: {
            console.log("Opção inválida.");
            break;
        }
    }
}
