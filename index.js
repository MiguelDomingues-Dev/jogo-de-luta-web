//Criação da variavel do vilão
const vilao = {
        vida: 5000,
        defesa: 500,
        shield: 250
}

const Heroi = {
        vida: 7000
}

//Função para calcular quando o usuario digitar o valor total, dá soma entre a vida, defesa e escudo do vilão
function calcularDano(powerAtaqueUSer) {
        const poderTotal = vilao.vida + vilao.defesa + vilao.shield
        if (powerAtaqueUSer <= poderTotal) {
                console.log(`Ataque fatal! Vilão derrotado instantaneamente!`)
        }
}

function ataqueInimigo() {
        return Math.floor(Math.random() * 1100) + 6000
}

//criação das variaveis das resposta do programa
//Função para processeguir o procedimento de ataque e subtrair uma por uma em cada variavel e com base na sobra ele desconta na proxima variavel
function lutem(powerAtaqueUSer) {
        const vidaVilao = document.getElementById('barra-vida2')
        const vidaVilaoEscudo = document.getElementById('barra-vida-3')
        const vidaVilaoDefesa = document.getElementById('barra-vida-4')
        const vidaVilaoVida = document.getElementById('barra-vida-5')
        const vidaHeroi = document.getElementById('barra-vida-6')
        const ryuLutador = document.getElementById('lutador')
        const socoUser = document.getElementById('ryu-user-soco')
        const venomDefender = document.getElementById('escudo-defender')
        const venomVilao = document.getElementById('robo-vilao')
        const venomDerrotado = document.getElementById('derrotado')
        const heroiVencedor = document.querySelector('.ryu-win')
        const youWinUser = document.querySelector('.ganhador-img')
        const vilaoSoco = document.getElementById('vilao-soco')

        if (vilao.shield >= powerAtaqueUSer && vilaoSoco.style.display === 'none' && vidaHeroi.style.display === 'none' && youWinUser.style.display === 'none' && heroiVencedor.style.display === 'none' && vidaVilao.style.display === 'block' && vidaVilaoEscudo.style.display === 'none' && vidaVilaoDefesa.style.display === 'none' && vidaVilaoVida.style.display === 'none' && ryuLutador.style.display === 'block' && socoUser.style.display === 'none' && venomDefender.style.display === 'none' && venomVilao.style.display === 'block' && venomDerrotado.style.display === 'none') {
                vilao.shield -= powerAtaqueUSer
                vidaVilaoEscudo.style.display = 'block'
                venomDefender.style.display = 'block'
                socoUser.style.display = 'block'
                vidaVilaoDefesa.style.display = 'none'
                vidaVilaoVida.style.display = 'none'
                venomDerrotado.style.display = 'none'
                ryuLutador.style.display = 'none'
                venomVilao.style.display = 'none'
                vidaVilao.style.display = 'none'
                console.log(`${powerAtaqueUSer} ${vilao.shield}`)
        } else if (vilao.shield > 0) {
                const danoAposEscudo = vilao.shield - vilao.shield
                vilao.shield = 0
                vilao.defesa -= danoAposEscudo
                vidaVilaoEscudo.style.display = 'block'
                venomDefender.style.display = 'block'
                socoUser.style.display = 'block'
                vidaVilaoDefesa.style.display = 'none'
                venomDerrotado.style.display = 'none'
                vidaVilaoVida.style.display = 'none'
                ryuLutador.style.display = 'none'
                venomVilao.style.display = 'none'
                vidaVilao.style.display = 'none'
                console.log(`Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`)
        } else if (vilao.defesa > 0) {
                const danoAposDefesa = vilao.defesa - powerAtaqueUSer
                vidaVilaoDefesa.style.display = 'block'
                venomDefender.style.display = 'block'
                socoUser.style.display = 'block'
                vidaVilaoEscudo.style.display = 'none'
                vidaVilaoVida.style.display = 'none'
                ryuLutador.style.display = 'none'
                venomVilao.style.display = 'none'
                vidaVilao.style.display = 'none'
                vilao.defesa = 0
                vilao.vida -= danoAposDefesa
                console.log(`Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`)
        } else {
                let vezDoJogador = true
                while (Heroi.vida > 0 && vilao.vida > 0) {
                        if (vezDoJogador) {
                                const dano = ataqueInimigo();
                                socoUser.style.display = 'block'
                                venomDefender.style.display = 'block'
                                vidaVilaoVida.style.display = 'block'
                                venomDerrotado.style.display = 'block'
                                heroiVencedor.style.display = 'block'
                                youWinUser.style.display = 'block'
                                console.log(`Você causou ${dano} de dano no inimigo.`);
                                vilao.vida -= powerAtaqueUSer    
                                vezDoJogador = false;
                        } else {
                                const dano = ataqueInimigo();
                                console.log(`O inimigo causou ${dano} de dano em você.`);
                                Heroi.vida -= dano;
                                vezDoJogador = true;
                                vidaHeroi.style.display = 'block'
                                vilaoSoco.style.display = 'block'
                        }
                console.log(`Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`)
        } 
        }
        if (vilao.vida <= 0) {
                vidaVilaoEscudo.style.display = 'none'
                vidaVilaoDefesa.style.display = 'none'
                venomDefender.style.display = 'none'
                ryuLutador.style.display = 'none'
                venomVilao.style.display = 'none'
                vidaVilao.style.display = 'none'
                socoUser.style.display = 'none'
                console.log('vilao Derrotado!')
        }
}

function receberNameUser() {
        let nameHero = document.getElementById('user-hero').value  
        document.getElementById('name-character1').value = nameHero
}
//Função criada para puxar as outras funções e criar a ação de click no botom do doc HTML e executar o código.
function enter() {
        const powerAtaqueUSer = parseInt(document.getElementById('atk').value)
        calcularDano(powerAtaqueUSer)
        lutem(powerAtaqueUSer)
} 