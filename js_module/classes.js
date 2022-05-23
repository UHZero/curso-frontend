class User {

    constructor(login, password, email){
        
        this.password = password,
        this.email = email,
        this.login = login

    }
}

const user01 = new User;
user01.login = 'stringdelogin';
user01.email = 'arroba@email.com';
user01.password = 'umasenha';

const user02 = new User;
user02.login = 'stringdeloginUSER02';
user02.email = 'arrobaUSER02@email.com';
user02.password = 'umasenhaUSER02';
Object.defineProperty(user02, 'cpf', {
    enumerable: true,
    writable: true,
    value: '555.555.555-30'
})
console.log(user02)

console.log(Object.values(user01));
console.log(Object.keys(user01));
console.log(Object.entries(user01));



class Movimentacao {
    constructor(banco = 'Santander', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia = '00', mes = '00', ano = '0000'){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach( lancamento => this.movimentacoes.push(lancamento))
    }

    extrato(){
        let valorAtualizado = 0;
        this.movimentacoes.forEach(lancamento => {
            valorAtualizado += lancamento.saldo
        })
        return valorAtualizado
    }
    
}
const bancoUser = 'Itau'
const m1 = new Movimentacao('', 'salario', 4000)
m1.banco = bancoUser
m1.saldo = m1.saldo + 6000;
console.log(m1)
const m2 = new Movimentacao('banco' , 'impostos', -1000)
const m3 = new Movimentacao('banco' , 'comissao', 750)
const registro01 = new Registro (02, 02, 2022)
registro01.novaMovimentacao(m1, m2, m3)
console.log(registro01.extrato())

