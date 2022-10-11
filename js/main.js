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
        return d6

}

function tirarD8(){
    let d8 = Math.floor(Math.random() * (9 - 1) + 1)
         if(d8==8){
        alert("Sacaste un 8! CRITICO!")
    }else{
        alert("su tirada fue un " + d8)
    }
    return d8
}

function tirarD10(){
    let d10 = Math.floor(Math.random() * (11 - 1) + 1)
    if(d10==10){
        alert("Sacaste un 10! CRITICO!")
    }else{
        alert("su tirada fue un " + d10)
    }
    return d10
}

function tirarD12(){
    let d12 = Math.floor(Math.random() * (13 - 1) + 1)
    if(d12==12){
        alert("Sacaste un 12! CRITICO!")
    }else{
        alert("su tirada fue un " + d12)
    }
    return d12
}

function tirarD20(){
    let d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if(d20==20){
        alert("Sacaste un 20! CRITICO!")
    }else{
        alert("su tirada fue un " + d20)
    }
    return d20
}

function tirarD100(){
    let d100 = Math.floor(Math.random() * (101 - 1) + 1)
    if(d100==100){
        alert("Sacaste un 100! CRITICO!")
    }else{
        alert("su tirada fue un " + d100)
    }
    return d100
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



function tirarMuchosDados(){  
    let sumatoria = 0;  
    let cantidadTiradas = prompt("Ingrese la cantidad de tiradas que va a realizar: ");
    for (let i=0; i<cantidadTiradas; i+=1){
        console.log("tirada numero " + (i+1));
        let carasDado = prompt("Ingrese la cantidad de Caras que tiene el dado")
        resultado = tiradasDado(carasDado)
        sumatoria = sumatoria + resultado
        console.log(sumatoria)
}   
}

let personaje ={}

let personaje1 = {
    nombre: "Gandalf",
    fuerza: 5,
    destreza: 8,
    inteligencia: 12
}

let personaje2 = {
    nombre: "Legolas",
    fuerza: 7,
    destreza: 10,
    inteligencia: 8
}

let personaje3 = {
    nombre: "Gimli",
    fuerza:  12,
    destreza: 6,
    inteligencia: 7,
}

let party = [personaje1, personaje2, personaje3];

function elegirPersonaje(nombrePj){
    if(nombrePj==='Gandalf' ||nombrePj=== 'gandalf' ||nombrePj=== 'GANDALF'){
        return personaje1
    }else if(nombrePj==='Legolas'||nombrePj=== 'legolas' ||nombrePj=== 'LEGOLAS'){
        return personaje2
    }else if (nombrePj==='Gimli'||nombrePj=== 'GIMLI' ||nombrePj=== 'gimli'){
        return personaje3
    }else{
        alert("Ese personaje no esta disponible.")
    }
    }

function PersonajeSeleccionado(){
    let nombreElegido = prompt("Ingresa el Personaje: ")
    let personaje = elegirPersonaje(nombreElegido);
    console.log("El personaje elegido fue " + personaje.nombre)
    console.log("Sus estadisticas son: FUERZA: " + personaje.fuerza + "   DESTREZA:  " + personaje.destreza + "   e INTELIGENCIA: " + personaje.inteligencia)
    return personaje
}
function presentarParty(arrayParty){
    console.log("Nuestro grupo esta conformado por: ")
    for(i=0; i<arrayParty.length; i+=1){
            console.log(arrayParty[i].nombre)
    }
    }

    function cambiarPersonaje(){
        personaje= PersonajeSeleccionado()
    }

    function tirarConPJ(personajeActual){
        let resultadoTirada = 0;
        console.log(personajeActual)
        let tipoDado = prompt("Ingresa caras dado: ");
        let stat = prompt("es una tirada de fuerza, inteligencia o destreza? " )
        console.log(personajeActual.stat) //por alguna razon no me toma la caracteristica. Devuelve undefinded
        resultadoTirada = tiradasDado(tipoDado)
        console.log(resultadoTirada) // aca tambien me devuelve undefined, no se por que.
        alert("Su tirada de " + stat + " fue de: " + ( resultadoTirada + personajeActual.stat))
    }

    presentarParty(party)
    personaje = PersonajeSeleccionado()
    tirarConPJ(personaje)
    //tirarMuchosDados()
