const TesteImparPar = (n) => {
    let calculoteste = n % 2

    if (calculoteste == 1){
        return "Número impar"
    } else {
    return "Número par"
    }
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(658))
console.log(TesteImparPar(84697))
