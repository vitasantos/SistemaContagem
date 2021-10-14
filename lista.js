let numeroAlunos = 5;
let listaAlunos = ["Raul", "Paula", "Isadora", "Amanda", "Rubens"] 

for(let contador = 0; contador < listaAlunos.length; contador++){

    if(contador == 0){
        console.log(contador + ": ZERO")
    }else if (contador % 2 == 1){
        console.log(`${contador}: ÍMPAR`)
    }else {
        console.log(`${contador}: PAR`)
    }
}