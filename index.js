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
}

//criação das variaveis das resposta do programa
//Função para processeguir o procedimento de ataque e subtrair uma por uma em cada variavel e com base na sobra ele desconta na proxima variavel
function lutem(powerAtaqueUSer) {
        const vidaVilao = document.getElementById('barra-vida2')
        const vidaVilaoEscudo = document.getElementById('barra-vida-3')
        const vidaVilaoDefesa = document.getElementById('barra-vida-4')
        const vidaVilaoVida = document.getElementById('barra-vida-5')
        const ryuLutador = document.getElementById('lutador')
        const socoUser = document.getElementById('ryu-user-soco')

        if (vilao.shield >= powerAtaqueUSer && vidaVilao.style.display === 'block' && vidaVilaoEscudo.style.display === 'none' && vidaVilaoDefesa.style.display === 'none' && vidaVilaoVida.style.display === 'none' && ryuLutador.style.display === 'block' && socoUser.style.display === 'none') {
                vilao.shield -= powerAtaqueUSer
                vidaVilao.style.display = 'none'
                vidaVilaoEscudo.style.display = 'block'
                vidaVilaoDefesa.style.display = 'none'
                vidaVilaoVida.style.display = 'none'
                ryuLutador.style.display = 'none'
                socoUser.style.display = 'block'
                console.log(`${powerAtaqueUSer} ${vilao.shield}`)
        } else if (vilao.shield > 0) {
                const danoAposEscudo = vilao.shield - vilao.shield
                vilao.shield = 0
                vilao.defesa -= danoAposEscudo
                vidaVilao.style.display = 'none'
                vidaVilaoEscudo.style.display = 'block'
                vidaVilaoDefesa.style.display = 'none'
                vidaVilaoVida.style.display = 'none'
                ryuLutador.style.display = 'none'
                socoUser.style.display = 'block'
                console.log(`Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`)
        } else if (vilao.defesa > 0) {
                const danoAposDefesa = vilao.defesa - powerAtaqueUSer
                vidaVilao.style.display = 'none'
                vidaVilaoEscudo.style.display = 'none'
                vidaVilaoDefesa.style.display = 'block'
                vidaVilaoVida.style.display = 'none'
                ryuLutador.style.display = 'none'
                socoUser.style.display = 'block'
                vilao.defesa = 0
                vilao.vida -= danoAposDefesa
                console.log(`Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`)
        } else {
                vilao.vida -= powerAtaqueUSer    
                console.log(`Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`)
        } 
        if (vilao.vida <= 0) {
                vidaVilao.style.display = 'none'
                vidaVilaoEscudo.style.display = 'none'
                vidaVilaoDefesa.style.display = 'none'
                vidaVilaoVida.style.display = 'block'
                ryuLutador.style.display = 'none'
                socoUser.style.display = 'block'
                console.log('vilao Derrotado!')
        }
}

//Função criada para puxar as outras funções e criar a ação de click no botom do doc HTML e executar o código.
function enter() {
        const powerAtaqueUSer = parseInt(document.getElementById('atk').value)
        calcularDano(powerAtaqueUSer)
        lutem(powerAtaqueUSer)
} 

