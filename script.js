function calcular(){
    let count = document.getElementById("numero").value
    if (count > 0){
        do {
            console.log(count);
            count--;
        } while (count > 0)
    } else {
        console.log("Número inválido")
    }
}

function calcular2(){
    let count = document.getElementById("numero").value
    for (i=1;i<=10;i++){
        console.log(`${count} x ${i} = ${count*i}`)
    }
}

function calcular3(){
    let count = document.getElementById("numero").value
    console.log(`${count} é divisível por:`)
    for (i=1;i<=count;i++){
        if (count%i===0){
            console.log(i)
        }
    }
}

function tentativa(){
    let chances = 3
    let num = Math.floor(Math.random()*10)
    let tentativas =[]
    while (chances > 0){
        let tentativa = prompt("Tentativa")
        
        if (!tentativas.includes(tentativa)){
            if (tentativa == num){
                console.log("Correto");
                break
            } else {
                tentativas.push(tentativa)
                console.log(`Errou - ${tentativas}`)
                chances--;
            }
        }
    }
    
    
}