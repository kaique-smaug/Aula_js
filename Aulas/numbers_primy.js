/* exercício 1

escrever três funções:

ehPrimo(n: number) => boolean
Receber um número e retornar um booleano 
indicando se é primo ou não

intervaloDePrimos(n1: number, n2: number) => number[]
Receber dois números formando um intervalo e retornar 
uma lista de primos no intervalo fechado [n1, n2]

filtraPrimos(v: number[]) => number[]
Receber uma lista de números e retornar uma nova lista
contendo apenas os números primos da primeira lista

*/

function ehPrimo(n) {
    // é primo se for divisível apenas por 1 e por ele mesmo
    if (n === 2) {
      return true;
    }
  
    if (n % 2 === 0) {
      return false;
    }
  
    for (let x = 3; x <= n ** 0.5 + 1; x += 2) {
      if (n % x === 0) {
        // x é divisor de n
        return false;
      }
    }
  
    return true;
  }
  
  
  function intervaloDePrimos(n1, n2) {
    let list = []
  
    for(let i = 1; i <= n2; i++){
  
      let prio = ehPrimo(i)
  
      if(prio === true){
          list.push(i)
  
        }
  
      }
    
    return list
    
  }   
  
  console.log(intervaloDePrimos(1, 10))
  
  function filtraPrimos() {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let new_list = []
    for(i in lista){
      if(ehPrimo(lista[i]) == true){
        new_list.push(lista[i])
      } 
      
    }
    return new_list
  }
  console.log(filtraPrimos())
  console.log('final')
  console.log('teste')