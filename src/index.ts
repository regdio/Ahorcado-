import { Ahorcado } from "./domain/Ahorcado";
import { elegirPalabra, PALABRAS } from "./domain/palabras";
import { mountApp } from "./ui/main";

const params = new URLSearchParams(window.location.search);
const azarDeLaUrl = params.get("azar");
const azar = azarDeLaUrl !== null ? () => Number(azarDeLaUrl) : Math.random;
const palabra = params.get("word") ?? elegirPalabra(PALABRAS, azar);

mountApp(document.getElementById("app")!, new Ahorcado(palabra));