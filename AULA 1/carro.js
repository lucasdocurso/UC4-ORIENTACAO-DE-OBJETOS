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
var marcaCarro = leitor.question("Qual a marca do seu carro?");
var novocarro = new Carro(1.6, 15, marcaCarro, 'Preto', 220);
//printando a propriedade:
console.log(novocarro.cor);
var menu = true;
while (menu) {
    var opcao = leitor.questionInt(" 1 - Dirigir, 2 - Acelerar, 3 - Lavar, 4 - Sair");
    switch (opcao) {
        case 1:
            novocarro.dirigir();
            break;
        case 2:
            novocarro.acelerar();
            break;
        case 3:
            novocarro.lavar();
            break;
        case 4:
            console.log('Saindo...');
            menu = false;
    }
}
