
function pedirNumero()
{
    let error;
    do
    {
        var Numero= prompt("Escribe un numero");
        //Comprobamos que el valor sea un numero entre 1 y 3 cifras maximas
        const Expres = new RegExp('^[0-9]{1,3}$', 'g');

        //Si el resultado devuelve true es un numero
        if( Expres.test(Numero) == true)
        {
            //El valor se convertirà a entero para hacer el factorial porque la función prompt devuelve un string por defecto
            Numero = parseInt(Numero);
            error = false;
        }
        //Si le da al boton Cancelar sale del programa
        else if(Numero == null)
        {
            alert("Has salido del programa");
            error = false;
        }
        else
        {
            alert("No has introducido un numero valido");
            error = true;
        }
    }
    while(error == true);
    return Numero;
}

let Numero = pedirNumero();
let fact=Numero;

let i = Numero;

while(i>1)
{
    fact*=(i-1);
    i--;
}

//Accedemos al valor del factorial del numero des del DOM
const factorial = document.getElementsByClassName("factorial")[0];
factorial.innerHTML = `El factorial de ${Numero} es ${fact}`;