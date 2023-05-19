
export function numero_par(numero) {
    return numero % 2 == 0
}

export function numero_impar(numero) {
    return numero % 2 != 0
}

export function raiz(numero, indice){
    return numero**indice
}

export function raiz_quadrada(numero) {
    return numero**0.5
}

export function raiz_cubica(numero) {
    return numero**(1/3)
}

export function media(soma, quantidade) { //É necessário criar uma variável para armazenar o valor das somas dos elementos
    return soma / quantidade
}

export function ordem_crescente(entrada) {
    const ordem = entrada.sort()
    return ordem
}

export function divisores(candidato, numero){
    return numero % candidato === 0
}

export function calcularmdc(x, y) {
    if (y === 0) {
      return x
    } else {
      return calcularmdc(y, x % y)
    }
}

export function calcularmmc(a, b){
    let mmc = (a * b) / calcularmdc(a, b)
    return mmc
}

export function primos(numero){
    if (numero < 2) {
        return `não é primo`
    }else if (numero === 2) {
        return `é primo`
    }else if (numero === 3) {
        return `é primo`
    }else if (numero === 5) {
        return `é primo`
    }else if (numero === 7) {
        return `é primo`
    }else if (numero % 2 === 0 || numero  % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
        return `não é primo`
    }else {
        return `é primo`
    }
}

export function numero_perfeito(numero){
    let novo = numero - 1
    let somatorio = 0

    while (atual >= 1){
        if (divisores(novo, numero)){
            somatorio = somatorio + novo
        }
        novo--
    }

    return somatorio === numero
}
