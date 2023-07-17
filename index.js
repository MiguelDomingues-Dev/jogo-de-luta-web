//criação das variaveis das resposta do programa
const res = document.getElementById('res')
const res2 = document.getElementById('resposta')
const vel = document.getElementById('vilao')

function styleBLock(res, res2, vel) {
        
}

//Criação da variavel do vilão
const vilao = {
        vida: 5000,
        defesa: 500,
        shield: 250
}

//Função para calcular quando o usuario digitar o valor total, dá soma entre a vida, defesa e escudo do vilão
function calcularDano(powerAtaqueUSer) {
        const poderTotal = vilao.vida + vilao.defesa + vilao.shield
        if (powerAtaqueUSer <= poderTotal) {
                console.log(`Ataque fatal! Vilão derrotado instantaneamente!`)
        }
        return;
}

//Função para processeguir o procedimento de ataque e subtrair uma por uma em cada variavel e com base na sobra ele desconta na proxima variavel
function lutem(powerAtaqueUSer) {
        if (vilao.shield >= powerAtaqueUSer) {
                vilao.shield -= powerAtaqueUSer
                console.log(`${powerAtaqueUSer} ${vilao.shield}`)
                res.innerText = `${powerAtaqueUSer} ${vilao.shield}`
        } else if (vilao.shield > 0) {
                const danoAposEscudo = vilao.shield - vilao.shield
                vilao.shield = 0
                vilao.defesa -= danoAposEscudo
                console.log(`Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`)
                res.innerText = `Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`
        } else if (vilao.defesa > 0) {
                const danoAposDefesa = vilao.defesa - powerAtaqueUSer
                vilao.defesa = 0
                vilao.vida -= danoAposDefesa
                console.log(`Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`)
                res.innerText = `Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`
        } else {
                vilao.vida -= powerAtaqueUSer    
                console.log(`Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`)
        } 
        if (vilao.vida <= 0) {
                console.log('vilao Derrotado!')
                res.innerText = `O heroi ${char} com um poder de ${powerAtaqueUSer} Conseguiu derrotar o Boss`
        }
}

//Função criada para puxar as outras funções e criar a ação de click no botom do doc HTML e executar o código.
function enter() {
        const powerAtaqueUSer = parseInt(document.getElementById('atk').value)
        const char = document.getElementById('name-character1')
        if (res.style.display == 'none' && res2.style.display == 'none' && vel.style.display == 'block') {
                res.style.display = 'block'
                res2.style.display = 'block'
                res.style.display = 'none'
                res.innerHTML = `O heroi ${char} com um poder de ${powerAtaqueUSer} Conseguiu derrotar o Boss`
                res2.innerText = `Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`
        }
        lutem(powerAtaqueUSer)
        calcularDano(powerAtaqueUSer)
        res.style.textAlign = 'center'    
        res2.style.textAlign = 'center'
} 


