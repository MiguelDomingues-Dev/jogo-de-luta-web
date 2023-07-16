const vilao = {
        vida: 5000,
        defesa: 500,
        shield: 250
}

const char = document.getElementById('name-character1')
const res = document.getElementById('res')
const res2 = document.getElementById('resposta')
const vel = document.getElementById('vilao')

function lutem(powerAtaqueUSer) {
        if (vilao.shield >= powerAtaqueUSer) {
                vilao.shield -= powerAtaqueUSer
                console.log(`${powerAtaqueUSer} ${vilao.shield}`)
        } else if (vilao.shield > 0) {
                const danoAposEscudo = vilao.shield - vilao.shield
                vilao.shield = 0
                vilao.defesa -= danoAposEscudo
                console.log(`Escudo zerado ${vilao.shield}, Falta passar pela a ${vilao.defesa} defesa. Vida restante ${vilao.vida}`)
        } else if (vilao.defesa > 0) {
                const danoAposDefesa = vilao.defesa - powerAtaqueUSer
                vilao.defesa = 0
                vilao.vida -= danoAposDefesa
                console.log(`Escudo zerado, defesa zerado ${vilao.defesa}! Vida restante ${vilao.vida}`)
        } else {
                vilao.vida - powerAtaqueUSer
                console.log(`Vida restante ${vilao.vida}`)
        } 
        if (vilao.vida <= 0) {
                console.log('vilao Derrotado!')
                res.innerText = `O heroi ${char} com um poder de ${powerAtaqueUSer} Conseguiu derrotar o Boss`
        }

}

function enter() {
        const powerAtaqueUSer = parseInt(document.getElementById('atk').value)
        if (res.style.display == 'none' && res2.style.display == 'none' && vel.style.display == 'block') {
                res.style.display = 'block'
                res2.style.display = 'block'
                res.style.display = 'none'
        }
        lutem(powerAtaqueUSer)
        res.style.textAlign = 'center'    
        res2.style.textAlign = 'center'
} 


