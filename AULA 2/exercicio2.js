var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("Titulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Ano Publi.: ").concat(this.anoPublicacao));
    };
    return Livro;
}());
var livro = new Livro("a", "b", 2024);
livro.obterDetalhes();
