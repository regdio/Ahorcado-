import { Ahorcado } from "./domain/Ahorcado";
import { mountApp } from "./ui/main";

const params = new URLSearchParams(window.location.search);
const palabra = params.get("word") ?? "GATO";

mountApp(document.getElementById("app")!, new Ahorcado(palabra));