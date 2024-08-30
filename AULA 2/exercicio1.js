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
var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor, kmmax) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.kmmax = kmmax;
    }
    Carro.prototype.dirigir = function () {
        console.log("Estou dirigindo meu ".concat(this.marca));
    };
    Carro.prototype.acelerar = function () {
        console.log("O seu ".concat(this.marca, " chegou a ").concat(this.kmmax, " km/h"));
    };
    Carro.prototype.lavar = function () {
        console.log("Estou lavando meu ".concat(this.marca));
    };
    return Carro;
}());
var Mitsubishi = /** @class */ (function (_super) {
    __extends(Mitsubishi, _super);
    function Mitsubishi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mitsubishi.prototype.dirigir = function () {
        console.log();
    };
    return Mitsubishi;
}(Carro));
/*
motor: number
rodas: number
marca: string
cor: string
kmmax: number

NUMBER e STRING -> Tipagens Genéricas
INT e FLOAT -> Tipagem Numérica Primitiva
STRING, CHAR, VARCHAR -> Tipagens Primitivas de Texto
*/
var motorNovo = leitor.questionFloat("Qual o tipo do seu motor? ");
var rodasNovo = leitor.questionInt("Qual o aro da roda do carro? ");
var marcaNovo = leitor.question("Qual a marca do carro? ");
var corNovo = leitor.question("Qual a cor do carro? ");
var kmsNovo = leitor.questionInt("Qual a kilometragem máxima? ");
var carroNovo = new Carro(motorNovo, rodasNovo, marcaNovo, corNovo, kmsNovo);
console.log(carroNovo);
