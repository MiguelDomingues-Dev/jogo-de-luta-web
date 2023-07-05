function enter() {
    var ataque = document.getElementById('atk')
    var character = document.getElementById('name-character1')
    var res = document.getElementById('res')
    var res2 = document.getElementById('resposta')
    var char = (character.value)
    var atk = (ataque.value)
    var def = 500
    var sh = 250
    var ph = 5000
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (atk > def && sh == 0) {
        var dano = atk - def
        var pt = ph - dano
        img.setAttribute('src', 'venon.jpg')
        res.innerHTML = `Venon | Defesa ${dano} | Escudo: 0 | ${pt}Ph`
        res2.innerText = `${char} teve um ataque de ${atk}ATK e não conseguiu derrotar o BOSS`
    } else if (atk > def && sh == 250) {
        var dano = atk - sh 
        var dan = dano - def / 2
        var pt = ph - dan
        img.setAttribute('src', 'burns.jpg')
        if (pt != 0) {
            res.innerHTML = `Venon | Defxesa 0 | Escudo: 0 | ${pt}Ph`
            res2.innerText = `${char} teve um ataque de ${atk}ATK e não conseguiu derrotar o BOSS`
        } else if (pt == 0) {
            res2.innerText = `${char} teve um ataque de ${atk}ATK e conseguiu derrotar o BOSS`
            res.innerHTML = `Venon | Defesa 0 | Escudo: 0 | 0Ph`
            img.setAttribute('src', 'homer.jpg')
        }
    } else {
        atk > def || atk == def 
        img.setAttribute('src', 'venon.jpg')
        res.innerHTML = `Venon | Defesa: 500 | Escudo: 250 | 5000Ph`
    }
    res.style.textAlign = 'center'    
    res2.style.textAlign = 'center'
    res.appendChild(img)}
