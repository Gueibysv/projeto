function somarVetor(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    console.log(soma);
    return soma;
}

somarVetor(vetor);
