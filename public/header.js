let b = document.querySelector("body");
let headerHtml = `<h1>Diseño de paginas web</h1><h2 class="subtitle">${subtitle}</h2>`;
let navbarHtml = `
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nuestros Temas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Tema1/Tema1.html">Selectores Css</a></li>
              <li><a class="dropdown-item" href="/Tema2/Tema2.html">Box Model</a></li>
              <li><a class="dropdown-item" href="/Tema3/Tema3.html">Flexbox</a></li>
              <li><a class="dropdown-item" href="#">Tema4</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cuestionarios
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/cuestionarios/flexbox/index.html">Flexbox</a></li>
              <li><a class="dropdown-item" href="/cuestionarios/grid/index.html">Grid</a></li>
              <li><a class="dropdown-item" href="/cuestionarios/selectoresCss/Cuestionario.html">Selectores Css</a></li>
              <li><a class="dropdown-item" href="#">Tema4</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Nosotros/nosotros.html">Nosotros</a>
          </li>
        </ul>
      </div>
    </div>
    `;

let header = document.createElement("header");
header.innerHTML= headerHtml;

let navbar = document.createElement("nav");
navbar.setAttribute("class", "navbar navbar-expand-lg bg-light");
navbar.innerHTML= navbarHtml;

b.appendChild(header);
b.appendChild(navbar);
    
