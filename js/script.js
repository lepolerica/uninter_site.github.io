const button = document.getElementById("horse_button");
const audio = document.getElementById("horse_sound");
const paragrafo = document.createElement("p");
paragrafo.textContent  = 'Cavalos possuem 4 dedos.';

button.addEventListener("click", function() {
    audio.play()
});
button.addEventListener("click", function() {
    alert("cavalo")
});
button.addEventListener("click", function() {
    document.getElementById("paragrafo").appendChild(paragrafo);
});