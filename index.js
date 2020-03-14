function calcular() {
  const peso = document.querySelector('#peso').value;
  const altura = document.querySelector('#altura').value;
  const res = document.querySelector('#res');
  res.innerHTML = ''
  res.setAttribute('class', 'border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal')
  
  const imc = (peso / (altura * altura)).toFixed(1)
  
  if(imc >= 24.9 && imc <= 30) {
    res.innerHTML += `<p>Seu IMC é: ${imc}</p>`
    res.innerHTML += '<p>Você está acima do peso</p>'
  } else if(imc >= 18.5 && imc >= 24.9) {
    res.innerHTML += `<p>Seu IMC é: ${imc}</p>`
    res.innerHTML += '<p>Você não está acima do peso</p>'
  }
}
