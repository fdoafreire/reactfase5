function procesarRespuestas() {
    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["a", "b", "c","a","b"];
    console.log(myForm["r1"].value)

    for (let i = 0; i < total; i++) {
        console.log(puntos);
        if (myForm["r" + i].value== null || myForm["r" + i].value== '') {
            alert('Favor responder todas las preguntas');
            return false;
        }else {
            if(myForm["r" + i].value === respuestasCorrectas[i] ){
                puntos ++ ;
            }
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuviste '+ puntos + ' puntos de ' + total + ' posibles ' ;
    return false; 
}