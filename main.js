/*let componentes = document.getElementsByClassName("idioma1")
let boton = document.getElementById("idioma")
let idiomaActual = boton.text


function cambiarIdioma(){
    if (idiomaActual == "EN"){
        componentes[0].textContent = "Home"
        componentes[1].textContent = "Have you taste\n our icecream?"
        componentes[2].textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam nemo illum eligendi officiis recusandae velit quia, ad atque, voluptatibus soluta laborum aliquam error, unde repellat tempore repudiandae. Ducimus, rerum."
        componentes[3].textContent = "¿Do you know what is your ideal icecream?"
        componentes[4].textContent = "Ice Cream Name"
        boton.textContent = "ES"
    }
    else{
        componentes[0].textContent = "Inicio"
        componentes[1].textContent = "¿Ya probaste\n nuestros helados?"
        componentes[2].textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam nemo illum eligendi officiis recusandae velit quia, ad atque, voluptatibus soluta laborum aliquam error, unde repellat tempore repudiandae. Ducimus, rerum."
        componentes[3].textContent = "¿Ya sabes cual es tu helado ideal?"
        componentes[4].textContent = "Nombre del Helado"
        boton.textContent = "EN"
    }
}*/

//cambiarIdioma()

function mostrarMenu(){
    document.getElementById('landing-derecho__restas').style.display = 'flex';
}

var contador = 0;

function siguientePregunta(){

    if (contador == 0){
        contador = contador + 1;
        document.getElementById('preguntas').textContent = "Pregunta 1";
        document.getElementById('Si').textContent = "Res";
        document.getElementById('No').textContent = "Res";

    } else if(contador == 1){
        contador = contador + 1;
        document.getElementById('preguntas').textContent = "Pregunta 2";
        document.getElementById('Si').textContent = "Res2";
        document.getElementById('No').textContent = "Res2";

    } else if(contador == 2){
        document.getElementById('preguntas').textContent = "Pregunta 3";
        document.getElementById('Si').textContent = "Res3";
        document.getElementById('No').textContent = "Res3";

        mostrarMenu();

    }

}

