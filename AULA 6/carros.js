var Carro = /** @class */ (function () {
    function Carro(consumoCombustivel) {
        this.consumoCombustivel = consumoCombustivel;
        this.quantidadeCombustivel = 0; // inicialmente vazio
    }
    Carro.prototype.adicionarCombustivel = function (quantidade) {
        this.quantidadeCombustivel += quantidade;
    };
    Carro.prototype.andar = function (distancia) {
        var combustivelNecessario = distancia / this.consumoCombustivel;
        if (combustivelNecessario <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= combustivelNecessario;
            console.log("Carro andou ".concat(distancia, " km."));
        }
        else {
            console.log("Não há combustível suficiente para percorrer essa distância.");
        }
    };
    Carro.prototype.obterCombustivel = function () {
        return this.quantidadeCombustivel;
    };
    return Carro;
}());
// Exemplo de uso:
var meuCarro = new Carro(10); // consumo de 10 km/L
meuCarro.adicionarCombustivel(50); // adiciona 50 litros de combustível
console.log("Combust\u00EDvel dispon\u00EDvel: ".concat(meuCarro.obterCombustivel(), " litros"));
meuCarro.andar(150); // tenta andar 150 km
console.log("Combust\u00EDvel restante: ".concat(meuCarro.obterCombustivel(), " litros"));
meuCarro.andar(300); // tenta andar mais 300 km
console.log("Combust\u00EDvel restante: ".concat(meuCarro.obterCombustivel(), " litros"));
meuCarro.andar(60); // tenta andar mais 300 km
console.log("Combust\u00EDvel restante: ".concat(meuCarro.obterCombustivel(), " litros"));
