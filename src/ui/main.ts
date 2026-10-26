import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado): void {
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
    </svg>
    <section class="tablero">
      <p class="palabra" data-testid="word"></p>
      <p> Vidas: <span data-testid="lives"></span></p>
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
  const input = root.querySelector<HTMLInputElement>("input")!;
  const mensaje = root.querySelector<HTMLElement>('[data-testid="message"]')!;
  const botonJugarDeNuevo = root.querySelector<HTMLButtonElement>("button")!;
  const partes = root.querySelectorAll<SVGElement>('[data-testid="parte"]');

  function render(): void {
    palabra.textContent = juego.palabraEnmascarada();
    vidas.textContent = String(juego.vidas());
    if (juego.gano()) {
      mensaje.textContent = "GANASTE";
    } else if (juego.perdio()) {
      mensaje.textContent = "PERDISTE";
    } else {
      mensaje.textContent = "";
    }
    botonJugarDeNuevo.hidden = !juego.terminada();
    partes.forEach((parte, i) => {
      parte.style.display = i < juego.errores() ? "" : "none";
    });
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!juego.esLetraValida(input.value)) {
        input.value = "";
        mensaje.textContent = "Ingresá una letra";
        mensaje.dataset.tono = "aviso";
        return;
      }
      juego.adivinar(input.value);
      input.value = "";
      render();
    }
  });
  botonJugarDeNuevo.addEventListener("click", () => {
    juego.reiniciar();
    render();
    input.focus();
  });
  render();
  input.focus();
}