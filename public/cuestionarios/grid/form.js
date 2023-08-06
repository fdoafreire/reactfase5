    let preguntas = [
	{
	    title: "Que es una cuadricula grid",
	    options: [
		{
		    label: "un conjunto de lineas horizontales y verticaes que se intersectan.",
		    value: "A"
		},
		{
		    label: "Una libreria de css que permite controlar el posicionamiento de una paginaweb",
		    value: "B"
		},
		{
		    label: "Es una propiedad css de los DIVs",
		    value: "C"
		},
		{
		    label: "Ningúna de las anteriores",
		    value: "D"
		}
	    ]
	},
	{
	    title: "Para crear un contenedor grid  se debe asignar a la propiedad display el valor",
	    options: [
		{
		    label: "Block",
		    value: "A"
		},
		{
		    label: "flex",
		    value: "B"
		},
		{
		    label: "None",
		    value: "C"
		},
		{
		    label: "Grid",
		    value: "D"
		}
	    ]
	},
	{
	    title: "El css .g-container{ display: grid; gap:1rem; grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr);} ",
	    options: [
		{
		    label: "crea un contenerdor flex que tiene un espacio entre cada elemento hijo de 1rem.",
		    value: "A"
		},
		{
		    label: "crea un contenedor grid con 1rem de espacio entre los hijos, cada hijo va a terner un tamaño minimo de 20px y maximo toda la pantalla.",
		    value: "B"
		},
		{
		    label: "crea un contenedor grid con 1rem de espacio entre los hijos, cada hijo va a terner un tamaño minimo de 20rem y maximo toda la pantalla.",
		    value: "C"
		},
		{
		    label: "crea un contenedor grid con 1rem de espacio entre los hijos, cada hijo va a terner un tamaño minimo de 20rem y maximo toda la pantalla y  si no tiene suficientes hijos para llenar la pantalla los expande al tope maximo.",
		    value: "D"
		},
	    ]
	},
	{
	    title: "Cual es la diferencia entre grid y flexbox.",
	    options: [
		{
		    label: "No tienen diferencia ya su principio es el mismo.",
		    value: "A"
		},
		{
		    label: "Grid utiliza un diseño bidimensional y flexbox unidimensional",
		    value: "B"
		},
		{
		    label: "grid utiliza un diseño unidimensional y flexbox tridimensional",
		    value: "C"
		},
		{
		    label: "grid es una libreria de css y flexbox js",
		    value: "D"
		},
	    ]
	},
	{
	    title: "De las siguientes propiedades seleccione cual no es un propiedad de grid.",
	    options: [
		{
		    label: "grid-template-rows",
		    value: "A"
		},
		{
		    label: "gap",
		    value: "B"
		},
		{
		    label: "flex-direction",
		    value: "C"
		},
		{
		    label: "grid-template-colum",
		    value: "D"
		},
	    ]
	}
    ];

    function verified() {
        let respuestas = {};
	let form = document.querySelector('#cuestionario_grid');
	let puntos = 0;
	Array.from(form.elements).forEach((input) => {
	    if (input.checked) {
		respuestas[input.getAttribute("name")] = input.getAttribute("value");
	    }
	});
        let score = 0.0;
	for (const [key, value] of Object.entries(respuestas)) {
	    if (key === 'respuesta1' && value === "A") {
		score += 2;
	    }
	    if (key === 'respuesta2' && value === "D") {
		score += 2;
	    }
	    if (key === 'respuesta3' && value === "D") {
		score += 2;
	    }
	    if (key === 'respuesta4' && value === "B") {
		score += 2;
	    }
	    if (key === 'respuesta5' && value === "C") {
		score += 2;
	    }
	}
        let html=`<div class="result"><span class="bg-success border border-success text-light rounded-circle font-weight-bold">${score}</span></div>
                  <p class="text-center">Puntaje</p>
                  <button type="button" class="btn btn-secondary nuevo-intento" onClick="show_form()">Volver a intentar.</button>`;
	form.innerHTML = html;
	  let btn = document.querySelector('#btn_verified');
	btn.classList.add("d-none");
	
	console.log(score);
    }

    function show_form() {
    let questions = ""
    preguntas.forEach((question, index) => {
	let options_html= "";
	question.options.forEach((option) => {
	    options_html +=`
	  <div class="form-check">
	    <input class="form-check-input" type="radio" name="respuesta${index + 1}" id="respuesta${index + 1}${option.value}" value="${option.value}">
	    <label class="form-check-label" for="respuesta${index + 1}${option.value}">
	      ${option.value}. ${option.label}
	    </label>
	  </div>`;
	});
	questions += `<div class="question">
	     <h3>${index + 1}. ${question.title}</h3>
	     <div class="options">${options_html}</div>
          </div>`;
	  });


	  let btn = document.querySelector('#btn_verified');
	btn.classList.remove("d-none");
	
	  
    let form = document.querySelector('#cuestionario_grid');
    form.innerHTML = questions;
}
