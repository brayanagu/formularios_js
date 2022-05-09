i=i
suma=0
numeros=""
function ciclowhile()
{
    numero=parseInt(document.formulario.caja.value)
    do
    {
        numeros=numeros+i+","
        suma=suma+i
        i=i+i
    }while(i<=numero)
    document.formulario.respuesta.value=numeros
    document.formulario.sumatoria.value=suma
}
