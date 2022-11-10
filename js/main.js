function tirarD4(){
    let d4 = Math.floor(Math.random() * (5 - 1) + 1)
        console.log("su tirada fue un " + d4)
        /* por lo general los d4 no se utilizan para acciones,
         por ende un 4 no se considera critico */

        return d4;
}

function tirarD6(){
    let d6 = Math.floor(Math.random() * (7 - 1) + 1)
        if(d6==6){
            console.log("Sacaste un 6! CRITICO!")
        }else{
            console.log("su tirada fue un " + d6)
        }
        return d6;

}

function tirarD8(){
    let d8 = Math.floor(Math.random() * (9 - 1) + 1)
         if(d8==8){
        console.log("Sacaste un 8! CRITICO!")
    }else{
        console.log("su tirada fue un " + d8)
    }
    return d8;
}

function tirarD10(){
    let d10 = Math.floor(Math.random() * (11 - 1) + 1)
    if(d10==10){
        console.log("Sacaste un 10! CRITICO!")
    }else{
        console.log("su tirada fue un " + d10)
    }
    return d10;
}

function tirarD12(){
    let d12 = Math.floor(Math.random() * (13 - 1) + 1)
    if(d12==12){
        console.log("Sacaste un 12! CRITICO!")
    }else{
        console.log("su tirada fue un " + d12)
    }
    return d12;
}

function tirarD20(){
    let d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if(d20==20){
        console.log("Sacaste un 20! CRITICO!")
    }else{
        console.log("su tirada fue un " + d20)
    }
    return d20;
}

function tirarD100(){
    let d100 = Math.floor(Math.random() * (101 - 1) + 1)
    if(d100==100){
        console.log("Sacaste un 100! CRITICO!")
    }else{
        console.log("su tirada fue un " + d100)
    }
    return d100;
}

function tiradasDado(caras){

    switch(caras){
        case "4":
            
            let d4 = Math.floor(Math.random() * (5 - 1) + 1)
            console.log("su tirada fue un " + d4)
             /* por lo general los d4 no se utilizan para acciones,
             por ende un 4 no se considera critico */

            return d4;
        
        case "6":
            let d6 = Math.floor(Math.random() * (7 - 1) + 1)
            if(d6==6){
                console.log("Sacaste un 6! CRITICO!")
            }else{
                console.log("su tirada fue un " + d6)
            }
            return d6;

        case "8":
            let d8 = Math.floor(Math.random() * (9 - 1) + 1)
            if(d8==8){
                console.log("Sacaste un 8! CRITICO!")
            }else{
                console.log("su tirada fue un " + d8)
             }
             return d8;

        case "10":
            let d10 = Math.floor(Math.random() * (11 - 1) + 1)
            if(d10==10){
                console.log("Sacaste un 10! CRITICO!")
            }else{
                console.log("su tirada fue un " + d10)
            }
             return d10;

        case "12":
            let d12 = Math.floor(Math.random() * (13 - 1) + 1)
            if(d12==12){
                console.log("Sacaste un 12! CRITICO!")
             }else{
                console.log("su tirada fue un " + d12)
            }
        return d12;

        case "20":
            let d20 = Math.floor(Math.random() * (21 - 1) + 1)
             if(d20==20){
                console.log("Sacaste un 20! CRITICO!")
            }else{
                console.log("su tirada fue un " + d20)
            }
        return d20;

        case "100":
            let d100 = Math.floor(Math.random() * (101 - 1) + 1)
            if(d100==100){
                console.log("Sacaste un 100! CRITICO!")
            }else{
                console.log("su tirada fue un " + d100)
            }
            return d100;

            default:
                console.log("Los valores validos son 4, 6, 8, 10, 12, 20 y 100!")
                
    }
}



/*function tirarMuchosDados(){  
    let sumatoria = 0;  
    let cantidadTiradas = prompt("Ingrese la cantidad de tiradas que va a realizar: ");
    for (let i=0; i<cantidadTiradas; i+=1){
        console.log("tirada numero " + (i+1));
        let carasDado = prompt("Ingrese la cantidad de Caras que tiene el dado")
        resultado = tiradasDado(carasDado)
        sumatoria = sumatoria + resultado
        console.log(sumatoria)
}   
}*/


const personaje1 = {
    nombre: "Gandalf",
    fuerza: 5,
    destreza: 8,
    inteligencia: 12
}

const personaje2 = {
    nombre: "Legolas",
    fuerza: 7,
    destreza: 10,
    inteligencia: 8
}

const personaje3 = {
    nombre: "Gimli",
    fuerza:  12,
    destreza: 6,
    inteligencia: 7,
}

let lista = [];

let party = [personaje1, personaje2, personaje3];

let personaje = personaje1;

let tituloPers = document.querySelector(".personajeSelec")

function presentarParty(arrayParty){
    console.log("Nuestro grupo esta conformado por: ")
    for(i=0; i<arrayParty.length; i+=1){
            console.log(arrayParty[i].nombre)
    }
    }

   const formu = document.getElementById('formulario')
   formu.addEventListener('submit', function(e){
    e.preventDefault();
    let charStat = document.getElementById('stat').value
    let carasDelDado = document.getElementById('caraDado').value
    console.log(charStat)
    console.log(carasDelDado)
   })


   const resultArea = document.querySelector('.resultados');

   function nuevoResultado(bloqueTexto){
    const agregarTexto = 
    `<p class="lineaResultado">${bloqueTexto}  <br> </p>
    `
   resultArea.insertAdjacentHTML("afterbegin", agregarTexto);
    }

    function agregarStorage(listado){
        localStorage.setItem('LISTA', JSON.stringify(listado))
    }

   function tirarConPJ(personajeActual){
        let resultadoTirada = 0;
        let stat = 0;
        let tipoDado = document.getElementById('caraDado').value;
        let statU = document.getElementById('stat').value;
            if(statU == "inteligencia"){
                stat = personajeActual.inteligencia
            }else if( statU == "destreza"){
                stat = personajeActual.destreza
            }else{
                stat = personajeActual.fuerza
            }
        resultadoTirada = tiradasDado(tipoDado)
        let textoFinal = ("Su tirada de " + statU + " con " + personajeActual.nombre + " fue de: " + ( resultadoTirada + stat));
       
        nuevoResultado(textoFinal)
        if (lista.length<13){
            lista.unshift(textoFinal)
        }else{
            lista.pop()
            lista.unshift(textoFinal)
        }
        agregarStorage(lista)
    }

    let data = localStorage.getItem('LISTA');
    if(data){
        lista = JSON.parse(data)
       // console.log(lista)
       lista = lista.reverse()
       cargarLista(lista)
    }

    function cargarLista(DATA){
        DATA.forEach(text => {nuevoResultado(text)}) 
    }

  

let boton1 = document.getElementById("elegirGimli")
boton1.addEventListener('click', function(){
    personaje = personaje3
    console.log("El personaje elegido fue " + personaje.nombre)
    console.log("Sus estadisticas son: FUERZA: " + personaje.fuerza + "   DESTREZA:  " + personaje.destreza + "   e INTELIGENCIA: " + personaje.inteligencia)
    tituloPers.textContent = 'PERSONAJE SELECCIONADO: GIMLI'
})

let boton2 = document.getElementById("elegirLegolas")
boton2.addEventListener('click', function(){
    personaje = personaje2
    console.log("El personaje elegido fue " + personaje.nombre)
    console.log("Sus estadisticas son: FUERZA: " + personaje.fuerza + "   DESTREZA:  " + personaje.destreza + "   e INTELIGENCIA: " + personaje.inteligencia)
    tituloPers.textContent = 'PERSONAJE SELECCIONADO: LEGOLAS'
}) 

let boton3 = document.getElementById("elegirGandalf")
boton3.addEventListener('click', function(){
    personaje = personaje1
    console.log("El personaje elegido fue " + personaje.nombre)
    console.log("Sus estadisticas son: FUERZA: " + personaje.fuerza + "   DESTREZA:  " + personaje.destreza + "   e INTELIGENCIA: " + personaje.inteligencia)
    tituloPers.textContent = 'PERSONAJE SELECCIONADO: GANDALF'
})



let boton4 = document.getElementById("tirarDados")
boton4.addEventListener('click', function(){
    tirarConPJ(personaje)
})
    presentarParty(party)
    //tirarConPJ(personaje)
    //tirarMuchosDados()
