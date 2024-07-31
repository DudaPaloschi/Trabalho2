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
var reader = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(tituloNovo, generoNovo, classificacaoEtariaNovo) {
        this.tituloJogo = tituloNovo;
        this.generoJogo = generoNovo;
        this.classificacaoEtariaJogo = classificacaoEtariaNovo;
    }
    Jogo.prototype.getDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.tituloJogo, "\n                     Genero: ").concat(this.generoJogo, "\n                     Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.classificacaoEtariaJogo));
    };
    Jogo.prototype.setDetalhes = function () {
        var tituloAtualizar = reader.question("Insira o título do jogo: ");
        var generoAtualizar = reader.question("Insira o genero do jogo: ");
        var classificacaoEtariaAtualizar = reader.questionInt("Insira a classificação etária: ");
        this.tituloJogo = tituloAtualizar;
        this.generoJogo = generoAtualizar;
        this.classificacaoEtariaJogo = classificacaoEtariaAtualizar;
    };
    return Jogo;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(tituloNovo, generoNovo, classificacaoEtariaNovo, plataformaNovo) {
        var _this = _super.call(this, tituloNovo, generoNovo, classificacaoEtariaNovo) || this;
        _this.plataformaJogo = plataformaNovo;
        return _this;
    }
    JogoEletronico.prototype.getDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.tituloJogo, "\n                     Genero: ").concat(this.generoJogo, "\n                     Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.classificacaoEtariaJogo, "\n                     Plataforma: ").concat(this.plataformaJogo));
    };
    JogoEletronico.prototype.setDetalhes = function () {
        var tituloAtualizar = reader.question("Insira o título do jogo: ");
        var generoAtualizar = reader.question("Insira o genero do jogo: ");
        var classificacaoEtariaAtualizar = reader.questionInt("Insira a classificação etária: ");
        var plataformaAtualizar = reader.question("Insira a plataforma do jogo: ");
        this.tituloJogo = tituloAtualizar;
        this.generoJogo = generoAtualizar;
        this.classificacaoEtariaJogo = classificacaoEtariaAtualizar;
        this.plataformaJogo = plataformaAtualizar;
    };
    return JogoEletronico;
}(Jogo));
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro(tituloNovo, generoNovo, classificacaoEtariaNovo, numeroJogadoresNovo) {
        var _this = _super.call(this, tituloNovo, generoNovo, classificacaoEtariaNovo) || this;
        _this.numeroJogadores = numeroJogadoresNovo;
        return _this;
    }
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.tituloJogo, "\n                     Genero: ").concat(this.generoJogo, "\n                     Classifica\u00E7\u00E3o Et\u00E1ria: ").concat(this.classificacaoEtariaJogo, "\n                     Num. Jogadores: ").concat(this.numeroJogadores));
    };
    JogoDeTabuleiro.prototype.setDetalhes = function () {
        var tituloAtualizar = reader.question("Insira o título do jogo: ");
        var generoAtualizar = reader.question("Insira o genero do jogo: ");
        var classificacaoEtariaAtualizar = reader.questionInt("Insira a classificação etária: ");
        var numJogadoresAtualizar = reader.questionInt("Insira a quantidade de jogadores: ");
        this.tituloJogo = tituloAtualizar;
        this.generoJogo = generoAtualizar;
        this.classificacaoEtariaJogo = classificacaoEtariaAtualizar;
        this.numeroJogadores = numJogadoresAtualizar;
    };
    return JogoDeTabuleiro;
}(Jogo));
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.jogos = [];
    }
    BibliotecaDeJogos.prototype.adicionarJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    BibliotecaDeJogos.prototype.removerJogo = function () {
        this.listarJogos();
        var tituloExcluir = reader.question("Qual título deseja excluir: ");
        this.jogos = this.jogos.filter(function (objJogo) { return objJogo.tituloJogo !== tituloExcluir; });
    };
    BibliotecaDeJogos.prototype.listarJogos = function () {
        console.log(this.jogos);
    };
    return BibliotecaDeJogos;
}());
/*
let reddead = new Jogo("red", "aventura", 16)
let supermeatboy = new Jogo("super meat", "plataforma", 16)
let estante = new BibliotecaDeJogos()

estante.adicionarJogo(reddead)
estante.adicionarJogo(supermeatboy)
estante.removerJogo()
console.log(estante);
*/ 
