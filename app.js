// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Expresión regular para validar solo letras (mayúsculas y minúsculas)
const SOLOLETRAS = /^[A-Za-z]+$/;

function agregarAmigo() {
    // Obtener elemento valor de <Input >
    let amigoInput = document.getElementById('amigo');
    // Eliminar espacios en blanco
    let nombreAmigo = amigoInput.value.trim();
    // Validar si nombreAmigo es <> de ""
    if (nombreAmigo) {

        // Validación con la expresión regular
        // El !  invierte el resultado. 
        // El método test() compara nombreAmigo con la expresión regular.  Por lo que devuelve booleano
        if (!SOLOLETRAS.test(nombreAmigo)) {
            alert('Por favor, ingresa solo letras.');
            limpiarInput();
            return;
        }
        // Checar si el arreglo 'amigos' esta en la lista
        if (amigos.includes(nombreAmigo)) {
            alert('Este amigo ya ha sido agregado.');
            return;
        }
        // Agregar Nombre al Array
        amigos.push(nombreAmigo);
        
        let listaAmigos = document.getElementById('listaAmigos');
        // Crea un nuevo nodo de elemento HTML, pero solo en la memoria del navegador.
        let listItem = document.createElement('li');
        // Establecer contenido en item = <li>nombreAmigo</li>.
        listItem.textContent = nombreAmigo;
        // Agregar a etiqueta <ul>, el item creado </li>
        listaAmigos.appendChild(listItem);  

        limpiarInput();
    } else {
        alert('Por favor, ingresa un nombre para añadir a la lista.');
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    let listaAmigos = document.getElementById('listaAmigos');

    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder sortear.');
        return;
    }
    
    // Obtener un numero al azar
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    // Obtener el NombreGanador del Array
    let amigoSorteado = amigos[indiceSorteado];
    // Mostar Amigo Secreto
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
    // Eliminar todo el contenido HTML que se encuentra dentro de un elemento.
    listaAmigos.innerHTML = '';
    // Limpiar Array Para poder jugar otra vez
    amigos = [];
    
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}
