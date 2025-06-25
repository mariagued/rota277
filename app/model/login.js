import { Gender } from './gender.js';

export class User {
    constructor(nome, email, cpf, data_nasc, genero) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this._nascimento = nascimento;
        this.genero = genero;
    }

    get nascimento() {
        return this._nascimento;
    }

    get nascimentoDate() {
        //return new Date(this._birthday + 'GMT-0300');
        return new Date(this._nascimento + 'UTC-3');
    }
}