function ProcesarRespuestas() {
    let total = 3
    let puntos = 0;

    let myForm = document.forms ["formulario"];
    let RespuestasCorrectas = ["c", "a", "b"];

    for (let i=1; i <= total; i++) {
        if (myForm["r" + i].value==null||
            myForm["r" + i].value==''){
                alert('Favor responder todas las preguntas');
                return false;
            } else{
                if (myForm["r" + i].value === RespuestasCorrectas[i-1])
                puntos++;
            }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuviste'+puntos+ 'puntos de ' + total + 'posibles';
    return false;
}