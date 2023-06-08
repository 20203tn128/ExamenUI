console.log("Hola desde function js")
const tv={
    power:false,
    volumen:0,
    canal:0,
    silence:false
}

const powerButton = document.getElementById("OnOffButton");
const vo1Button =  document.getElementById("vol1Button");
const vol2Button = document.getElementById("vol2Button");
const canal1Button = document.getElementById("canal1Button");
const canal2Button = document.getElementById("canal2Button");

function print(){
    console.log("El estado actual del televisor es: \n" + "encender: " + tv.power + "\n" + "volumen: " + tv.volumen + "\n" + "canal: " + tv.canal + "\n" + "silencio: " + tv.silence + "\n"  )
}

function  turnOn(){
    if(!tv.power){
        console.log("A encendido el televisor");
        tv.volumen = 3;
        tv.canal = 7;
        tv.power = true;
        print();
    }else{
        console.log("A apagado el televisor");
        tv.power = false;
        tv.volumen = 0;
        tv.canal= 0;
        tv.silence = false;
        print();

    }
}


function silence(){
    if(tv.power){
        let volumen = tv.volumen;
        if(!tv.silence){
            console.log("Has activado el modo silencio");
            tv.volumen = 0;
            tv.silence = true; 
            print();
            tv.volumen = volumen
            
        }else{
            console.log("Has salido del modo silencio");
            tv.volumen = volumen;
            tv.silence = false;
            print();
            
        }
    }else{
        console.log("La television no esta prendida");
    }   
}

function soundHard(){
    if(tv.power){
            if(tv.volumen < 10){
                tv.volumen++;
                console.log("Has subido el volumen a: " + tv.volumen);
                print();
             }else{
                if(tv.volumen == 10)
                console.log("Has llegado al maximo del volumen " + tv.volumen)
                print();
             }
             
    }else{
        console.log("La television no esta prendida o esta el modo silencio activado");
    }
}

function soundDown(){
    if(tv.power  && !tv.silence){
        if(tv.volumen > 1){
            tv.volumen--;
            console.log("Has bajado el volumen a: " + tv.volumen);
            print();
         }else{
            if(tv.volumen == 1)
            console.log("Has llegado al minimo del volumen " + tv.volumen)
            print();
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
            print();
         }else{
            if(tv.canal == 100)
            console.log("Has llegado al maximo del canal " + tv.canal)
            print();
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
            print();
         }else{
            if(tv.canal == 1)
            console.log("Has llegado al minimo del canal " + tv.canal)
            print();
         }
         
}else{
    console.log("La television no esta prendida");
}
}