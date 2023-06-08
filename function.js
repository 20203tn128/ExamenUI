console.log("Hola desde function js")
const tv={
    power:true,
    volumen:0,
    canal:0,
    silence:true
}

const powerButton = document.getElementById("OnOffButton");
const vo1Button =  document.getElementById("vol1Button");
const vol2Button = document.getElementById("vol2Button");
const canal1Button = document.getElementById("canal1Button");
const canal2Button = document.getElementById("canal2Button");


function  turnOn(){
    if(tv.power){
        console.log("A encendido el televisor");
        tv.volumen = 3;
        tv.canal = 7;
        tv.power = false;
        console.log(tv)
    }else{
        console.log("A apagado el televisor");
        tv.power = true;
        tv.volumen = 0;
        tv.canal= 0;
        tv.silence = false;
        console.log(tv)

    }
}


function silence(){
    if(!tv.power){
        let volumen = tv.volumen;
        if(tv.silence){
            console.log("Has activado el modo silencio");
            tv.volumen = 0;
            console.log(tv)
            tv.volumen = volumen
            tv.silence = false;
        }else{
            console.log("Has salido del modo silencio");
            tv.volumen = volumen;
            console.log(tv)
            tv.silence = true;
        }
    }else{
        console.log("La television no esta prendida");
    }   
}

function soundHard(){
    if(!tv.power && tv.silence){
            if(tv.volumen < 10){
                tv.volumen++;
                console.log("Has subido el volumen a: " + tv.volumen);
             }else{
                if(tv.volumen == 10)
                console.log("Has llegado al maximo del volumen " + tv.volumen)
             }
             
    }else{
        console.log("La television no esta prendida o esta el modo silencio activado");
    }
}

function soundDown(){
    if(!tv.power  && tv.silence){
        if(tv.volumen > 1){
            tv.volumen--;
            console.log("Has bajado el volumen a: " + tv.volumen);
         }else{
            if(tv.volumen == 1)
            console.log("Has llegado al minimo del volumen " + tv.volumen)
         }
         
}else{
    console.log("La television no esta prendida o esta el modo silencio activado");
}
}

function changeHard(){
    if(!tv.power){
        if(tv.canal < 100){
            tv.canal++;
            console.log("Has subido el canal a: " + tv.canal);
         }else{
            if(tv.canal == 100)
            console.log("Has llegado al maximo del canal " + tv.canal)
         }
         
}else{
    console.log("La television no esta prendida");
}
}

function changeDown(){
    if(!tv.power){
        if(tv.canal > 1){
            tv.canal--;
            console.log("Has bajado el canal a: " + tv.canal);
         }else{
            if(tv.canal == 1)
            console.log("Has llegado al minimo del canal " + tv.canal)
         }
         
}else{
    console.log("La television no esta prendida");
}
}