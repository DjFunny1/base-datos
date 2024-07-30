document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let materias = document.querySelector('#toggle-button1').value;
    let errorMessage = document.getElementById('error-message');

    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(materias);
    

    if (nombre === 'nombre' && apellido === 'apellido' && edad === 'edad' && materias === 'toggle-button1') {
        window.location = "registro-alumnos.html";

} else {
    errorMessage.textContent = 'Por favor, rellene todos los campos.';
    }
});

//Acceso a Clase Literatura

document.getElementById('materiaLi').addEventListener('click', function(event) {
    window.location = "clase-literatura.html";
});

//Acceso a Clase Música

document.getElementById('materiaMu').addEventListener('click', function(event) {
    window.location = "clase-musica.html";
});

//Acceso a Clase Diseño

document.getElementById('materiaDi').addEventListener('click', function(event) {
    window.location = "clase-diseno.html";
});

//Acceso a Desempeño de Alumnos

document.getElementById('desempeno').addEventListener('click', function(event) {
    window.location = "desempeno.html";
});

//Acceso a Registro de Alumnos

document.getElementById('register').addEventListener('click', function(event) {
    window.location = "registro-alumnos.html";
});

//Haciendo el push de registro de alumnos

/* class Alumno {
    constructor(index) {
        this.index = index;
    }
} */

let i = 0;
let todosLosRegistros = [];

const alumno1 = new Alumno ('false', 'true', i);

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const toggle = document.querySelector('#toggle-button1');
const submit = document.querySelector('#submit');


function agregarNuevoRegistro(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let toggle = document.querySelector('#toggle-button1').value;

    const nuevoRegistro = new Alumno(nombre, apellido, edad, toggle, i);
    i++;
    todosLosRegistros.push(nuevoRegistro);
    renderTodosLosRegistros();
}
//console.log(todosLosRegistros)

submit.addEventListener('click', agregarNuevoRegistro);

const Nuevoalumnodiv = document.querySelector('.nuevo-ingreso');

function renderTodosLosRegistros() {
    Nuevoalumnodiv.innerHTML = '';
    for(let i = 0; i < todosLosRegistros.length; i++) {
        const alumnodiv = document.createElement('div');
        alumnodiv.setAttribute('class', 'Alumno');
        const innerHTML = `
        <input ${todosLosRegistros[i].index} type="text" name="alumno-${todosLosRegistros[i].index}" id="alumno-${todosLosRegistros[i].index}">
        <label for="alumno-${todosLosRegistros[i].index}">${todosLosRegistros[i].nombre}, ${todosLosRegistros[i].apellido}, ${todosLosRegistros[i].edad}, ${todosLosRegistros[i].toggle}</label>
        <button>Admitido/a</button>
        `
        alumnodiv.innerHTML = innerHTML;
        if(todosLosRegistros[i].index) {
            Nuevoalumnodiv.appendChild(alumnodiv);
        } else if (todosLosRegistros[i]) {

        }
    }
}

