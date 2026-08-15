/* =================================
   ELEMENTOS
================================= */

const botonEmpezar =
    document.getElementById("boton-empezar");

const pantallaInicio =
    document.getElementById("pantalla-inicio");

const pantallaEleccion =
    document.getElementById("pantalla-eleccion");

const pantallaJuego =
    document.getElementById("pantalla-juego");

const pantallaFinal =
    document.getElementById("pantalla-final");

const carta1 =
    document.getElementById("carta-1");

const carta2 =
    document.getElementById("carta-2");

const numeroPregunta =
    document.getElementById("numero-pregunta");

const preguntaGemela1 =
    document.getElementById("pregunta-gemela-1");

const preguntaGemela2 =
    document.getElementById("pregunta-gemela-2");

const respuestasGemela1 =
    document.getElementById("respuestas-gemela-1");

const respuestasGemela2 =
    document.getElementById("respuestas-gemela-2");

const etiqueta1 =
    document.getElementById("etiqueta-1");

const etiqueta2 =
    document.getElementById("etiqueta-2");

const mensajeResultado =
    document.getElementById("mensaje-resultado");

const botonFinal =
    document.getElementById("boton-final");


/* =================================
   PREGUNTAS
================================= */

/*
   ACÁ VAS A PONER TUS 8 PREGUNTAS.

   pregunta:
   Lo que verá la gemela que tiene
   que responder.

   respuestas:
   Las 3 opciones.

   correcta:
   El número de la respuesta correcta.

   0 = primera respuesta
   1 = segunda respuesta
   2 = tercera respuesta
*/

const preguntas = [

    {
        pregunta: "¿Cuál es el color favorito de la otra gemela?",

        respuestas: [
            "Rosa",
            "Azul",
            "Violeta"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Cuál es su comida favorita?",

        respuestas: [
            "Pizza",
            "Hamburguesa",
            "Pasta"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Cuál sería su viaje soñado?",

        respuestas: [
            "París",
            "Japón",
            "Nueva York"
        ],

        correcta: 1
    },


    {
        pregunta: "¿Qué animal le gusta más?",

        respuestas: [
            "Gato",
            "Perro",
            "Conejo"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Qué elegiría para pasar una tarde?",

        respuestas: [
            "Mirar películas",
            "Salir de fiesta",
            "Ir de compras"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Qué cosa odia más?",

        respuestas: [
            "Levantarse temprano",
            "La lluvia",
            "Esperar"
        ],

        correcta: 2
    },


    {
        pregunta: "¿Cuál es más probable que se pierda?",

        respuestas: [
            "Gemela 1",
            "Gemela 2",
            "Las dos"
        ],

        correcta: 0
    },


    {
        pregunta: "¿Quién conoce mejor a la otra?",

        respuestas: [
            "Gemela 1",
            "Gemela 2",
            "Las dos por igual"
        ],

        correcta: 2
    }

];


/* =================================
   VARIABLES DEL JUEGO
================================= */

let preguntaActual = 0;


/*
   true:

   Gemela 1 pregunta
   Gemela 2 responde


   false:

   Gemela 2 pregunta
   Gemela 1 responde
*/

let gemela1Pregunta = true;


/* =================================
   BOTÓN EMPEZAR
================================= */

botonEmpezar.addEventListener("click", () => {

    pantallaInicio.style.display = "none";

    pantallaEleccion.style.display = "flex";

});


/* =================================
   ELECCIÓN DE CARTAS
================================= */

/*
   La carta 1 pertenece a la gemela 1.
   La carta 2 pertenece a la gemela 2.

   Las dos tienen que elegir su carta
   antes de comenzar.
*/

let eligioGemela1 = false;

let eligioGemela2 = false;


carta1.addEventListener("click", () => {

    eligioGemela1 = true;

    carta1.style.filter = "brightness(1.2)";

    comprobarElecciones();

});


carta2.addEventListener("click", () => {

    eligioGemela2 = true;

    carta2.style.filter = "brightness(1.2)";

    comprobarElecciones();

});


function comprobarElecciones() {

    if (eligioGemela1 && eligioGemela2) {

        setTimeout(() => {

            pantallaEleccion.style.display = "none";

            pantallaJuego.style.display = "flex";

            mostrarPregunta();

        }, 500);

    }

}


/* =================================
   MOSTRAR PREGUNTA
================================= */

function mostrarPregunta() {

    const pregunta =
        preguntas[preguntaActual];


    /* Número */

    numeroPregunta.textContent =
        preguntaActual + 1;


    /* Limpiar */

    preguntaGemela1.textContent = "";

    preguntaGemela2.textContent = "";

    respuestasGemela1.innerHTML = "";

    respuestasGemela2.innerHTML = "";

    mensajeResultado.textContent = "";


    /* =================================
       GEMELA 1 PREGUNTA
    ================================== */

    if (gemela1Pregunta) {

        etiqueta1.textContent = "PREGUNTA";

        etiqueta2.textContent = "RESPUESTAS";


        preguntaGemela1.textContent =
            pregunta.pregunta;


        crearRespuestas(
            respuestasGemela2,
            pregunta
        );

    }


    /* =================================
       GEMELA 2 PREGUNTA
    ================================== */

    else {

        etiqueta1.textContent = "RESPUESTAS";

        etiqueta2.textContent = "PREGUNTA";


        preguntaGemela2.textContent =
            pregunta.pregunta;


        crearRespuestas(
            respuestasGemela1,
            pregunta
        );

    }

}


/* =================================
   CREAR RESPUESTAS
================================= */

function crearRespuestas(contenedor, pregunta) {

    pregunta.respuestas.forEach(
        (respuesta, indice) => {

            const boton =
                document.createElement("button");


            boton.classList.add("respuesta");


            boton.textContent =
                respuesta;


            boton.addEventListener(
                "click",
                () => {

                    comprobarRespuesta(indice);

                }
            );


            contenedor.appendChild(boton);

        }
    );

}


/* =================================
   COMPROBAR RESPUESTA
================================= */

function comprobarRespuesta(indiceElegido) {

    const pregunta =
        preguntas[preguntaActual];


    /* =================================
       RESPUESTA CORRECTA
    ================================== */

    if (indiceElegido === pregunta.correcta) {

        mensajeResultado.textContent =
            "¡Correcto!";


        /*
           Bloquear los botones para evitar
           que se presione más de una vez.
        */

        const botones =
            document.querySelectorAll(".respuesta");


        botones.forEach(boton => {

            boton.disabled = true;

        });


        /*
           Esperar un momento y pasar
           a la siguiente pregunta.
        */

        setTimeout(() => {

            siguientePregunta();

        }, 1200);

    }


    /* =================================
       RESPUESTA INCORRECTA
    ================================== */

    else {

        mensajeResultado.textContent =
            "Incorrecto. Intenten de nuevo.";

    }

}


/* =================================
   SIGUIENTE PREGUNTA
================================= */

function siguientePregunta() {

    preguntaActual++;


    /*
       ¿Ya terminaron las 8?
    */

    if (preguntaActual >= preguntas.length) {

        terminarJuego();

        return;

    }


    /*
       Cambiar quién hace la pregunta.

       Gemela 1 pregunta
       ↓
       Gemela 2 pregunta
       ↓
       Gemela 1 pregunta
       ↓
       etc.
    */

    gemela1Pregunta =
        !gemela1Pregunta;


    mostrarPregunta();

}


/* =================================
   FINAL
================================= */

function terminarJuego() {

    pantallaJuego.style.display = "none";

    pantallaFinal.style.display = "flex";

}


/* =================================
   BOTÓN FINAL
================================= */

botonFinal.addEventListener("click", () => {

    /*
       Más adelante acá podemos poner
       el enlace a la página de las flores.
    */

    console.log("Ir a las flores");

});