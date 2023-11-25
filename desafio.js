function resultado() {
  const numeroDigitado = prompt("Digite um número inteiro: ")
  let soma = 0;
  
  for(i = 1; i < numeroDigitado; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i)
      soma += i;
    }
  }
  return soma
}

console.log(resultado())