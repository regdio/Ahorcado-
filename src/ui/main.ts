import { Ahorcado } from "../domain/Ahorcado";

const COMENTARIOS_POR_ERROR = [
  "Tranqui, todavía no dibujé nada.",
  "Ya tiene cabeza. Usá la tuya.",
  "Le salió el cuerpo. Vamos bien… o no.",
  "Un brazo. Te está saludando.",
  "Dos brazos. Está pidiendo ayuda.",
  "Una pierna. Ya está en puntitas de pie.",
];
const COMENTARIO_GANO = "Salvaste al muñeco. Esto merece un 10";
const COMENTARIO_PERDIO = "Game over :(";
const COMENTARIO_LETRA_INVALIDA = "Eso no es una letra </3";

export function mountApp(root: HTMLElement, juego: Ahorcado, nuevaPalabra: () => string): void {
  root.innerHTML = `
  <main class="hoja">
  <h1 class="titulo">Ahorcado</h1>
  <div class="juego">
    <svg class="dibujo" viewBox="0 0 120 150" aria-hidden="true">
      <line x1="10" y1="140" x2="110" y2="140" />
      <line x1="30" y1="140" x2="30" y2="10" />
      <line x1="30" y1="10" x2="80" y2="10" />
      <line x1="80" y1="10" x2="80" y2="30" />
      <circle data-testid="parte" pathLength="1" cx="80" cy="42" r="12" />
      <line data-testid="parte" pathLength="1" x1="80" y1="54" x2="80" y2="95" />
      <line data-testid="parte" pathLength="1" x1="80" y1="65" x2="60" y2="80" />
      <line data-testid="parte" pathLength="1" x1="80" y1="65" x2="100" y2="80" />
      <line data-testid="parte" pathLength="1" x1="80" y1="95" x2="65" y2="120" />
      <line data-testid="parte" pathLength="1" x1="80" y1="95" x2="95" y2="120" />
      <g class="ojos-x">
        <line x1="74" y1="38" x2="78" y2="42" />
        <line x1="78" y1="38" x2="74" y2="42" />
        <line x1="82" y1="38" x2="86" y2="42" />
        <line x1="86" y1="38" x2="82" y2="42" />
      </g>
      <g class="salvado">
        <circle cx="138" cy="92" r="9" />
        <path d="M134 94 q4 4 8 0" />
        <line x1="138" y1="101" x2="138" y2="122" />
        <line x1="138" y1="106" x2="127" y2="94" />
        <line x1="138" y1="106" x2="149" y2="94" />
        <line x1="138" y1="122" x2="130" y2="138" />
        <line x1="138" y1="122" x2="146" y2="138" />
      </g>
      </svg>
      <figcaption class="comentario" aria-live="polite"></figcaption>
    </figure>
    <section class="tablero">
      <p class="palabra" data-testid="word"></p>
      <p class="vidas">
        Vidas: <span data-testid="lives"></span>
        <span class="corazones" aria-hidden="true"></span>
      </p>
      <label class="campo">
        <input type="text" maxlength="1" aria-label="Letra" autocomplete="off" />
        <span>Escribí una letra y apretá Enter</span>
      </label>
      <p class="mensaje" data-testid="message" aria-live="polite"></p>
      <button type="button" class="otra-vez" hidden>Jugar de nuevo</button>
    </section>
  </div>
  </main>
  `;

  const palabra = root.querySelector<HTMLElement>('[data-testid="word"]')!;
  const vidas = root.querySelector<HTMLElement>('[data-testid="lives"]')!;
  const corazones = root.querySelector<HTMLElement>(".corazones")!;
  const input = root.querySelector<HTMLInputElement>("input")!;
  const mensaje = root.querySelector<HTMLElement>('[data-testid="message"]')!;
  const comentario = root.querySelector<HTMLElement>(".comentario")!;
  const botonJugarDeNuevo = root.querySelector<HTMLButtonElement>("button")!;
  const partes = root.querySelectorAll<SVGElement>('[data-testid="parte"]');
  const ojosX = root.querySelector<SVGElement>(".ojos-x")!;
  const salvado = root.querySelector<SVGElement>(".salvado")!;

  function textoDelComentario(): string {
    if (juego.gano()) {
      return COMENTARIO_GANO;
    }
    if (juego.perdio()) {
      return COMENTARIO_PERDIO;
    }
    return COMENTARIOS_POR_ERROR.at(juego.errores()) ?? "";
  }

  function render(): void {
    palabra.textContent = juego.palabraEnmascarada();
    vidas.textContent = String(juego.vidas());
    corazones.textContent = "♥".repeat(juego.vidas()) + "♡".repeat(juego.errores());
    if (juego.gano()) {
      mensaje.textContent = "GANASTE";
      mensaje.dataset.tono = "gano";
    } else if (juego.perdio()) {
      mensaje.textContent = "PERDISTE";
      mensaje.dataset.tono = "perdio";
    } else {
      mensaje.textContent = "";
      mensaje.dataset.tono = "";
    }
    comentario.textContent = textoDelComentario();
    botonJugarDeNuevo.hidden = !juego.terminada();
    input.disabled = juego.terminada();
    partes.forEach((parte, i) => {
      parte.style.display = i < juego.errores() ? "" : "none";
    });
    ojosX.style.display = juego.perdio() ? "" : "none";
    salvado.style.display = juego.gano() ? "" : "none";
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!juego.esLetraValida(input.value)) {
        input.value = "";
        mensaje.textContent = "Ingresá una letra";
        mensaje.dataset.tono = "aviso";
        comentario.textContent = COMENTARIO_LETRA_INVALIDA;
        return;
      }
      juego.adivinar(input.value);
      input.value = "";
      render();
    }
  });

  botonJugarDeNuevo.addEventListener("click", () => {
    juego.reiniciar(nuevaPalabra());
    render();
    input.focus();
  });
  render();
  input.focus();
}