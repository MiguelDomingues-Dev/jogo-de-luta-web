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
        const res = document.getElementById('res')
        const res2 = document.getElementById('resposta')
        const vel = document.getElementById('vilao')
        const char = document.getElementById('name-character1').value
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (vilao.shield >= powerAtaqueUSer && res.style.display == 'none' && res2.style.display == 'none' && vel.style.display == 'block') {
                vilao.shield -= powerAtaqueUSer
                res.style.display = 'block'
                res2.style.display = 'block'
                vel.style.display = 'none'
                img.setAtribute('src', 'burns.jpg')
                console.log(`${powerAtaqueUSer} ${vilao.shield}`)
                res.innerHTML = `O heroi ${char} com um poder de ${powerAtaqueUSer} ainda não conseguiu derrotar o Boss`
                res2.innerText = `${powerAtaqueUSer} ${vilao.shield}`
        } else if (vilao.shield > 0) {
                const danoAposEscudo = vilao.shield - vilao.shield
                vilao.shield = 0
                vilao.defesa -= danoAposEscudo
                res.style.display = 'block'
                res2.style.display = 'block'
                vel.style.display = 'none'
                console.log(`Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`)
                res.innerHTML = `O heroi ${char} com um poder de ${powerAtaqueUSer} ainda não conseguiu derrotar o Boss`
                res2.innerText = `Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`
        } else if (vilao.defesa > 0) {
                const danoAposDefesa = vilao.defesa - powerAtaqueUSer
                vilao.defesa = 0
                vilao.vida -= danoAposDefesa
                res.style.display = 'block'
                res2.style.display = 'block'
                vel.style.display = 'none'
                console.log(`Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`)
                res.innerHTML = `O heroi ${char} com um poder de ${powerAtaqueUSer} ainda não conseguiu derrotar o Boss`
                res2.innerText = `Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`
        } else {
                vilao.vida -= powerAtaqueUSer    
                res.style.display = 'block'
                res2.style.display = 'block'
                vel.style.display = 'none'
                console.log(`Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`)
                res.innerHTML = `O heroi ${char} com um poder de ${powerAtaqueUSer} ainda não conseguiu derrotar o Boss`
                res2.innerText = `Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`
        } 
        if (vilao.vida <= 0) {
                res.style.display = 'block'
                res2.style.display = 'block'
                vel.style.display = 'none'
                console.log('vilao Derrotado!')
                res.innerHTML = `O heroi ${char} com um poder de ${powerAtaqueUSer} conseguiu derrotar o Boss`
                res2.innerText = `Ataque de ${powerAtaqueUSer}! Vida restante: ${vilao.vida}`
        }
        res.style.textAlign = 'center'    
        res2.style.textAlign = 'center'
        res.appendChild(img)
}

//Função criada para puxar as outras funções e criar a ação de click no botom do doc HTML e executar o código.
function enter() {
        const powerAtaqueUSer = parseInt(document.getElementById('atk').value)
        lutem(powerAtaqueUSer)
        calcularDano(powerAtaqueUSer)
} 


