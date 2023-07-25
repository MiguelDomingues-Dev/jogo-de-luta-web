const audioSoco = document.getElementById('audioSoco')
const socoAnimado = document.getElementById('ryu-user-soco')
socoAnimado.style.animation = 'animation: luta 900ms steps(8) infinite'
audioSoco.loop = true
function reproduzirComAudio() {
        audioSoco.play()
}

const audioJogo = document.getElementById('trilhaSonora')
audioJogo.loop = true
function trilhaSonora() {
        audioJogo.play()
}

const audioVitoria = document.getElementById('audioVictory') 
audioVitoria.loop = true
function victory() {
        audioVitoria.play()
}

const battleAudio = document.getElementById('battleAudio')
battleAudio.loop = true
function audioBattle() {
        battleAudio.play()
}

const vitoriaMakoto = document.getElementById('vitoriaMakoto')
vitoriaMakoto.loop = true
function makotoVictory() {
        vitoriaMakoto.play()
}

const realoadYes = document.querySelector('.sim-repete') 
realoadYes.addEventListener('click', function() {
        location.reload()
})

const realoadYes2 = document.querySelector('.sim-repete2')
realoadYes2.addEventListener('click', function () {
        location.reload()
})

const vilao = {
        vida: 5000,
        defesa: 500,
        shield: 250
}

const Heroi = {
        vida: 7000
}

function ataqueInimigo(min, max) {
        if (min < 0) {
                min = 0
        }
        if (max < min) {
                max = min
        }
        const random = Math.random()
        const resultado = Math.floor(random * (max - min + 1) + min)
        return resultado;
}
const dano = ataqueInimigo(1000, 7000);

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
        const vilaoSoco = document.getElementById('vilao-soco')
        const ryuDefender = document.getElementById('defender-ryu')
        const derrotaRyu = document.getElementById('derrotado-ryu')
        const userDerrot = document.querySelector('#You-failed')
        const userGain = document.querySelector('#You-gain')

        battleAudio.play()
        audioJogo.pause()
        if (vilao.shield >= powerAtaqueUSer && userGain.style.display === 'none' && userDerrot.style.display === 'none' && ryuDefender.style.display === 'none' && derrotaRyu.style.display === 'none' && vilaoSoco.style.display === 'none' && vidaHeroi.style.display === 'none' && vidaVilao.style.display === 'block' && vidaVilaoEscudo.style.display === 'none' && vidaVilaoDefesa.style.display === 'none' && vidaVilaoVida.style.display === 'none' && ryuLutador.style.display === 'block' && socoUser.style.display === 'none' && venomDefender.style.display === 'none' && venomVilao.style.display === 'block' && venomDerrotado.style.display === 'none') {
                vilao.shield -= powerAtaqueUSer
                vidaVilaoEscudo.style.display = 'block'
                venomDefender.style.display = 'block'
                socoUser.style.display = 'block'
                vidaVilaoDefesa.style.display = 'none'
                vidaVilaoVida.style.display = 'none'
                venomDerrotado.style.display = 'none'
                ryuDefender.style.display = 'none'
                ryuLutador.style.display = 'none'
                venomVilao.style.display = 'none'
                vidaVilao.style.display = 'none'
                derrotaRyu.style.display = 'none'
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
                ryuDefender.style.display = 'none'
                ryuLutador.style.display = 'none'
                derrotaRyu.style.display = 'none'
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
                ryuDefender.style.display = 'none'
                ryuLutador.style.display = 'none'
                derrotaRyu.style.display = 'none'
                venomVilao.style.display = 'none'
                vidaVilao.style.display = 'none'
                vilao.defesa = 0
                vilao.vida -= danoAposDefesa
                console.log(`Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`)
        } else {
                let vezDoJogador = true
                while (Heroi.vida >= 0 && vilao.vida >= 0) {
                        if (vezDoJogador) {
                                socoUser.style.display = 'block'
                                venomDefender.style.display = 'block'
                                venomDerrotado.style.display = 'none'
                                ryuDefender.style.display = 'none'
                                derrotaRyu.style.display = 'none'
                                vidaHeroi.style.display = 'none'
                                vilaoSoco.style.display = 'none'
                                vilao.vida -= powerAtaqueUSer    
                                vezDoJogador = false;
                        } else {
                                console.log(`O inimigo causou ${dano} de dano em você.`);
                                Heroi.vida -= dano;
                                vezDoJogador = true;
                                vilaoSoco.style.display = 'block'
                                ryuDefender.style.display = 'block'
                                derrotaRyu.style.display = 'none'
                                socoUser.style.display = 'none'
                                venomDefender.style.display = 'none'
                                console.log(`O inimigo causou ${dano} de dano em você. Vida restante ${dano}`);
                        }
                        console.log(`Ataque de ${powerAtaqueUSer}! Vida restante: ${Heroi.vida}`)
                } 
        }
        if (vilao.vida <= 0) {
                vidaVilaoEscudo.style.display = 'none'
                vidaVilaoDefesa.style.display = 'none'
                venomDefender.style.display = 'none'
                ryuLutador.style.display = 'none'
                venomVilao.style.display = 'none'
                socoUser.style.display = 'none'
                derrotaRyu.style.display = 'none'
                venomDerrotado.style.display = 'block'
                userGain.style.display = 'block'
                vidaVilaoVida.style.display = 'block'
                audioSoco.pause()
                audioJogo.pause()
                audioVitoria.play()
                battleAudio.pause()
                console.log(`Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`)
        } else if(Heroi.vida <= 0) {
                console.log('vilao Derrotado!')
                vilaoSoco.style.display = 'none'
                ryuDefender.style.display = 'none'
                derrotaRyu.style.display = 'none'
                socoUser.style.display = 'none'
                venomDefender.style.display = 'none'
                vidaHeroi.style.display = 'block'
                userDerrot.style.display = 'block'
                audioSoco.pause()
                battleAudio.pause()
                vitoriaMakoto.play()
        }
}

function receberNameUser() {
        let nameHero = document.getElementById('user-hero').value  
        document.getElementById('name-character1').value = nameHero
}
//Função criada para puxar as outras funções e criar a ação de click no botom do doc HTML e executar o código.
function enter() {
        const powerAtaqueUSer = parseInt(document.getElementById('atk').value)
        reproduzirComAudio()
        lutem(powerAtaqueUSer)
} 