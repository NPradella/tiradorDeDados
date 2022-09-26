function tirarD4(){
    let d4 = Math.floor(Math.random() * (5 - 1) + 1)
        alert("su tirada fue un " + d4)
        /* por lo general los d4 no se utilizan para acciones,
         por ende un 4 no se considera critico */
        return d4
}

function tirarD6(){
    let d6 = Math.floor(Math.random() * (7 - 1) + 1)
        if(d6==6){
            alert("Sacaste un 6! CRITICO!")
        }else{
            alert("su tirada fue un " + d6)
        }

}

function tirarD8(){
    let d8 = Math.floor(Math.random() * (9 - 1) + 1)
         if(d8==8){
        alert("Sacaste un 8! CRITICO!")
    }else{
        alert("su tirada fue un " + d8)
    }
}

function tirarD10(){
    let d10 = Math.floor(Math.random() * (11 - 1) + 1)
    if(d10==10){
        alert("Sacaste un 10! CRITICO!")
    }else{
        alert("su tirada fue un " + d10)
    }
}

function tirarD12(){
    let d12 = Math.floor(Math.random() * (13 - 1) + 1)
    if(d12==12){
        alert("Sacaste un 12! CRITICO!")
    }else{
        alert("su tirada fue un " + d12)
    }
}

function tirarD20(){
    let d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if(d20==20){
        alert("Sacaste un 20! CRITICO!")
    }else{
        alert("su tirada fue un " + d20)
    }
}

function tirarD100(){
    let d100 = Math.floor(Math.random() * (101 - 1) + 1)
    if(d100==100){
        alert("Sacaste un 100! CRITICO!")
    }else{
        alert("su tirada fue un " + d100)
    }
}

function tiradasDado(caras){

    switch(caras){
        case "4":
            
            tirarD4()
            break;
        
        case "6":
           tirarD6()
            break;

        case "8":
            tirarD8()
            break;

        case "10":
            tirarD10()
            break;

        case "12":
            tirarD12()
           break;

        case "20":
            tirarD20()
            break;

        case "100":
            tirarD100()
           break;

            default:
                alert("Los valores validos son 4, 6, 8, 10, 12, 20 y 100!")
                tiradasDado(prompt("Ingrese la cantidad de Caras que tiene el dado"))
                
    }
}


function cantidadDeTiradas(){
    let cantidadTiradas = prompt("Ingrese la cantidad de tiradas que va a realizar: ");

    for (let i=0; i<cantidadTiradas; i+=1){
        console.log("tirada numero " + (i+1));
        let carasDado = prompt("Ingrese la cantidad de Caras que tiene el dado")
        tiradasDado(carasDado)  
}
}



cantidadDeTiradas()
