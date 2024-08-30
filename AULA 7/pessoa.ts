
 export class Pessoas {
    nome: string
    sobrenome: string
    nomePai: string
    nomeMae: string
    numeroRg: number
    numeroCpf: number
    dataNascimento

    constructor(nome:string,sobrenome: string,nomePai: string,nomeMae:string,numeroRg:number,numeroCpf:number,dataNascimento:number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nomePai = nomePai
        this.nomeMae = nomeMae
        this.numeroRg = numeroRg
        this.numeroCpf = numeroCpf
        this.dataNascimento = dataNascimento
    }

}