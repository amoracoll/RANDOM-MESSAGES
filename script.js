// Lista de frases aleatorias
var frasesAleatorias = [
    "La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante.",
    "La creatividad es inteligencia divirtiéndose.",
    "El éxito es ir de fracaso en fracaso sin perder entusiasmo.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "La paciencia es amarga, pero su fruto es dulce.",
    "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La vida es 10% lo que me pasa y 90% cómo reacciono a ello.",
    "Si buscas resultados distintos, no hagas siempre lo mismo.",
    "El secreto del éxito es aprender a usar el dolor y el placer en lugar de dejar que te use a ti.",
];

// Obtener una frase aleatoria
function generarPalabraAleatoria() {
    // Obtén un índice aleatorio de la lista de frases
    var indiceAleatorio = Math.floor(Math.random() * frasesAleatorias.length);

    // Obtén el elemento de párrafo por su ID
    var elementoP = document.getElementById("palabraAleatoria");

    // Actualiza el contenido del párrafo con la frase aleatoria
    elementoP.textContent = "Frase aleatoria: " + frasesAleatorias[indiceAleatorio];
}