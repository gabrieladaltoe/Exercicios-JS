// Escreva uma função que recebe
// um número e retorna `true` se ele
// é um numero de cartao de credito
// valido ou `false` se não.
//
// Dica: Algoritmo de Luhn.

// só podem começar com 3, 4, 5 e 6.

// sequência de 16 numeros inteiros de 0 a 9
// Inverter a sequência
// pegar as posições pares e multiplicar por 2





function isValidCreditCard(card) {
    const numerosLimpos = card.replace(/\D/g, '').split("")
    let aux = false
    let sum = 0
    

    for(let i = numerosLimpos.length -1; i >= 0 ; i--){
        let resultado = numerosLimpos[i]

        if(aux){
            resultado= (numerosLimpos[i] * 2).toString()
            if (resultado.length === 2) {
                resultado = parseInt( resultado[0]) + parseInt(resultado[i])
            }
        }
        sum += parseInt(resultado)
        aux = !aux
    }
    return sum > 0 && sum % 2 === 0
}


const valid_credit_cards = [
    "799 273 987 13",
    "378734493671000",
    "3714-4963-5398-431",
    "5610XXX..5910--810!18250",
    "30569309025904",
    "385 2000   0023 237",
    "6011111111111117",
    "6011000990139424",
    "353 0111 3333 00000",
    "356600 woop woop 2020360505",
    "5555555555554444",
    "5105105105105100"
]

for (const valid of valid_credit_cards) {
// for(let i = 0; i < valid_credit_cards.length; i++)
// let valid = valid_credit_cards[i]
    console.log(isValidCreditCard(valid))
}

const invalid_credit_cards = [
    "799 223 987 13",
    "3787786493671000",
    "3724-4963-5398-431",
    "5610XX3..5910--810!18250",
    "0305699025904",
    "385 2000   0011123 237",
    "6011111111117",
    "60190139424",
    "353 0111 3333 00100",
    "3566043 woop woop 2020360505",
    "55553555555554444",
    "5105205105105100"
]

for (const invalid of invalid_credit_cards) {
    console.log(isValidCreditCard(invalid))
}



