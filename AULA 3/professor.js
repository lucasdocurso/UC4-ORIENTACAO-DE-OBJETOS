var leitor = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, idade, ano_exp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_exp = ano_exp;
    }
    Professor.prototype.getProfessor = function () {
        console.log("Nome: ".concat(this.nome, ", Idade: ").concat(this.idade, " e Tempo de Exp.: ").concat(this.ano_exp));
    };
    Professor.prototype.setProfessor = function () {
        var nomeUpdate = leitor.question("Qual o nome do professor? ");
        var idadeUpdate = leitor.questionInt("Qual a idade do professor? ");
        var ano_expUpdate = leitor.questionInt("Qual o tempo de experiencia do professor? ");
        this.nome = nomeUpdate;
        this.idade = idadeUpdate;
        this.ano_exp = ano_expUpdate;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(prof, nome_escola, end_escola, num_endereco) {
        this.prof = prof;
        this.nome_escola = nome_escola;
        this.end_escola = end_escola;
        this.num_endereco = num_endereco;
    }
    Escola.prototype.getEscola = function () {
        console.log("Nome da Escola: ".concat(this.nome_escola, ", End. Escola: ").concat(this.end_escola, " n ").concat(this.num_endereco, ", Professor: ").concat(this.prof.nome));
    };
    Escola.prototype.setEscola = function () {
        var atualizarProf = leitor.question("Você gostaria de atualizar as infos do professor? S p/ Sim e N p/ Não").toLowerCase();
        if (atualizarProf == "s") {
            this.prof.setProfessor();
            var arrayEscola = atualizarEscola();
            this.nome_escola = arrayEscola[0];
            this.end_escola = arrayEscola[1];
            this.num_endereco = arrayEscola[2];
        }
        else {
            var arrayEscola = atualizarEscola();
            this.nome_escola = arrayEscola[0];
            this.end_escola = arrayEscola[1];
            this.num_endereco = arrayEscola[2];
        }
        function atualizarEscola() {
            var nome_escolaUpdate = leitor.question('Qual o nome da escola? ');
            var end_escolaUpdate = leitor.question('Qual o endereço da escola? ');
            var num_enderecoUpdate = leitor.questionInt('E o número? ');
            var atualizacaoEscola = [nome_escolaUpdate, end_escolaUpdate, num_enderecoUpdate];
            return atualizacaoEscola;
        }
    };
    return Escola;
}());
var menu = true;
var prof = new Professor("", 0, 0);
var escola = new Escola(prof, "", "", 0);
while (menu) {
    var opcao = leitor.questionInt('Insira o numero da opcao desejada:\n 1 - Criar Professor \n 2 - Criar Escola \n 3 - Atualizar Professor \n 4 - Atualizar Escola \n 5 - Visualizar Professor \n 6 - Visualizar Escola \n 7 - Visualizar Prof. e Escola \n 0 - Sair \n Resposta: ');
    switch (opcao) {
        case 1:
            prof.setProfessor();
            break;
        case 2:
            escola.setEscola();
            break;
        case 3:
            prof.setProfessor();
            break;
        case 4:
            escola.setEscola();
            break;
        case 5:
            prof.getProfessor();
            break;
        case 6:
            escola.getEscola();
            break;
        case 7:
            prof.getProfessor();
            escola.getEscola();
            break;
        case 0:
            !menu;
            process.exit(0);
    }
}
