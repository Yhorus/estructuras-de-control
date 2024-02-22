enchufle = false;

enchufle ? console.log("esta encendido") : console.log ("esta apagado)");


let: variable = 9; 

variable >= 18 ? console.log("mayor de edad"): console.log("es menor de edad");

let numero =-3; 

numero > 0 ? console.log("numero positivo") : console.log("numero negativo");

let ocupacionCancha =true;
let numbreCancha = "bernabeu";

let mensaje = ocupacionCancha ? `la chancha llamada "${nombreCancha}" esta ocupada` :

`la cancha llamada ${nombrecancha} esta disponible`;
console.log(mensaje);


const email = "arleth64@gmail.com" ;
const contraseña = "1234" ;

email == "arleth64@gmail.com" && contraseña == "1234" ?
console.log('señor usuario con correo ${email} Bienvenido al sistema') :
console.log(`El correo ${email} y la contraseña digitada es incorrecta`);


let colorsemaforo = "amarillo" ;
colorsemaforo == "verde"? console.log(`el semaforo esta en ${colorsemaforo} puede seguir`) :
colorsemaforo == "rojo" ? console.log (`el semaforo esta en ${colorsemaforo} debe parar`):
colorsemaforo == "amarillo" ? console.log("aliste motores"):
console.log(`muestra color ${colorsemaforo}, esta dañado`);


let temeperatura = 40;
if(temperatura >= 40){
console.log(`usted tiene fiebre, su temperatura es mayor a &{temperatura} grados`)
}

let tipoCliente = "normal";
if (tipoCliente == "normal"){
    console.log (`va a ser atendido en modulo 1, por ser cliente &{tipoCliente}`);
}else if(tipoCliente == "preferencial"){
    console.log("esta habilitado los modelos 2 y 3 para su atencion");
}else{
    console.log("usted no es cliente del banco, por favor dirijase al mudulo 4");
}


let emailbasedatos = "arleth64@gmail.com";
let clavebasedatos = "1234*";
let emailingrasado = "arle@gmail.com";
let claseingresada = "1234*";
let nombreusuario = "juan";

if(emailbasedatos == emailingresado && clavebasedatos == claveingresada){
    console.log(`${nombreusuario} bienvenido!, seleccione opcion del sistema`);
}else{
    console.log(`acceso denegado`);
}



let derecha = false;
let izquierda = false; 
let arriba = false;
let abajo = false; 

if(derecha){
    console.log ("robot movimiento hacia derecha");
}else if(izquierda){
    console.log ("robot movimiento hacia la izquierda");
}else if(arriba){
    console.log ("robot movimiento hacia arriba");
}else if(abajo){
    console.log("robot moviendose hacia abajo");
}else{
    console.log("movimiento extraño");
}
    


    let encendido = true;
    let velocidad = 32;
    
    if(encendido){
        console.log(`su carro esta encendido`);
        if(velocidad == 0){
        console-log(`carro freno`);
        }else if (velocidad >0 && velocidad <= 100){
            console.log (`carro en marcha`)
        }else{
            console.log(`evitese un accidente.. exceso de velocidad`)
        }
        

    }else{
        console.log(`encienda su vehiculo`);
    }



    let dia = "miercoles";
    let clase = "algoritmos";
    if (dia == "miercoles"){
        console.lg (`la clase de hoy es ${clase}`);
    }

let edad = 2 
let determinarEdad = ( edad >= 18)? "acceso autorizado": "acceso denegado"
console.log(determinarEdad)



let a = 3 
let b = 2
let c = 2
a = b++
b++ 
c= 1 
console.log(a + b - (c ** 2))

