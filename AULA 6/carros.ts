class Carro {
    private consumoCombustivel: number; // km/L
    private quantidadeCombustivel: number; // em litros

    constructor(consumoCombustivel: number) {
        this.consumoCombustivel = consumoCombustivel;
        this.quantidadeCombustivel = 0; // inicialmente vazio
    }

    adicionarCombustivel(quantidade: number): void {
        this.quantidadeCombustivel += quantidade;
    }

    andar(distancia: number): void {
        const combustivelNecessario = distancia / this.consumoCombustivel;
        if (combustivelNecessario <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= combustivelNecessario;
            console.log(`Carro andou ${distancia} km.`);
        } else {
            console.log("Não há combustível suficiente para percorrer essa distância.");
        }
    }

    obterCombustivel(): number {
        return this.quantidadeCombustivel;
    }
}

// Exemplo de uso:
let meuCarro = new Carro(10); // consumo de 10 km/L

meuCarro.adicionarCombustivel(50); // adiciona 50 litros de combustível

console.log(`Combustível disponível: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(150); // tenta andar 150 km
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(300); // tenta andar mais 300 km
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(60); // tenta andar mais 300 km
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);

