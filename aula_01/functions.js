let a = 0
let b = 0
let c = a+b

function sum() {
    var a = document.getElementById("idA").value
    var b = document.getElementById("idB").value

    var c = parseInt(a)+parseInt(b)
    
}

document.getElementById("idC").innerHTML = `Seu resultado é: ${c} !`

