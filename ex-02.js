// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"


function formatRG(unformatted) {
    const numerosLimpos = unformatted.replace(/\D/g, '')
    return `${numerosLimpos[0]}.${numerosLimpos[1]}${numerosLimpos[2]}${numerosLimpos[3]}.${numerosLimpos[4]}${numerosLimpos[5]}${numerosLimpos[6]}-${numerosLimpos[7]}${numerosLimpos[8]}`
}


