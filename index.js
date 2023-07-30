const audioSoco = document.getElementById('audioSoco')
const socoAnimado = document.getElementById('ryu-user-soco')
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

function ataqueUer(min, max) {
        if (min < 0) {
                min = 0
        }
        if (max < min) {
                max = min
        }
        const randon = Math.random()
        const resultados = Math.floor(randon * (max - min + 1) + min)
        return resultados;
}
const powerAtaqueUSer = ataqueUer(1000, 5750);

//função para a criação dos personagens
function Personagem(nome, vida, atk) {
        this.nome = nome;
        this.vida = vida;
        this.atk = atk;
}

// Função que faz o ataque do alvo
function atacar(atacante, alvo) {
        console.log(`${atacante.nome} ataca ${alvo.nome} e causa ${atacante.atk} de dano.`);
        alvo.vida -= atacante.atk;
}

const vidaUserFull = document.querySelector('.barra-vida')
const ryuLutador = document.getElementById('lutador')
const socoUser = document.getElementById('ryu-user-soco')
const venomDefender = document.getElementById('escudo-defender')
const venomVilao = document.getElementById('robo-vilao')
const venomDerrotado = document.getElementById('derrotado')
const vilaoSoco = document.getElementById('vilao-soco')
const ryuDefender = document.getElementById('defender-ryu')
const derrotaRyu = document.getElementById('derrotado-ryu')


//Função para processeguir o procedimento de ataque e subtrair uma por uma em cada variavel e com base na sobra ele desconta na proxima variavel
const userDerrot = document.querySelector('#You-failed')
const userGain = document.querySelector('#You-gain')
const vidaVilaoVida = document.getElementById('barra-vida-5')
const vidaHeroi = document.getElementById('barra-vida-6')

function lutar(Heroi, vilao) {
        while (Heroi.vida > 0 && vilao.vida > 0) {
                //Heroi ataca vilão
                atacar(Heroi, vilao)
                //Verifica se o vilão foi derrotado
                if(vilao.vida <= 0) {
                        console.log(`${vilao.nome} foi derrotado! ${Heroi.nome} Venceu a luta`)
                        vidaVilaoVida.style.display = 'block'
                        userGain.style.display = 'block'
                        audioVitoria.play()
                        break;
                }
                //Vez do Vilão atacar
                atacar(vilao, Heroi)
                //Verifica se o Heroi foi derrotado
                if (Heroi.vida <= 0) {
                        console.log(`${Heroi.nome} foi derrotado! ${vilao.nome} Venceu a luta`)
                        vidaHeroi.style.display = 'block'
                        userDerrot.style.display = 'block'
                        break;

                }
        }
}

function receberNameUser() {
        let nameHero = document.getElementById('user-hero').value  
        document.getElementById('name-character1').value = nameHero
}

// Criando os personagens
const Heroi = new Personagem("Ryu", 7800, powerAtaqueUSer);
const vilao = new Personagem("Makoto", 5750, dano);

//Função criada para puxar as outras funções e criar a ação de click no botom do doc HTML e executar o código.
function enter() {
        lutar(Heroi, vilao)
        reproduzirComAudio()
} 