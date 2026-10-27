import { Ahorcado } from "./domain/Ahorcado";
import { elegirOtraPalabra, elegirPalabra, PALABRAS } from "./domain/palabras";
import { mountApp } from "./ui/main";

const params = new URLSearchParams(window.location.search);
const azarDeLaUrl = params.get("azar");
const azar = azarDeLaUrl !== null ? () => Number(azarDeLaUrl) : Math.random;
const palabraFija = params.get("word");

let palabraActual = palabraFija ?? elegirPalabra(PALABRAS, azar);

function nuevaPalabra(): string {
  if (palabraFija !== null) return palabraFija;
  palabraActual = elegirOtraPalabra(PALABRAS, palabraActual, azar);
  return palabraActual;
}

mountApp(document.getElementById("app")!, new Ahorcado(palabraActual), nuevaPalabra);