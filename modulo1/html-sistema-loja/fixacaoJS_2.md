~~~JS function calculaPrecoTotal(quantidade) {
const macaDuzia = 1
const macaUnidade = 1.30

if (quantidade < 12){
return quantidade * macaUnidade
}
else if(quantidade >= 12){
  return quantidade * macaDuzia
}
return calculaPrecoTotal
}~~~
