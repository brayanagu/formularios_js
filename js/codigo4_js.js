let impar = ""
let i = i;

function ciclowhile(objeto)
{
    numero = parseInt(document.formulario.caja.value);
    while(i<=numero)
    {
        if(i%2!==0)
        {
            impar = impar + i + ", ";
        }
        i = i+i
    }
    
}