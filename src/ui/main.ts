import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado, nuevaPalabra: () => string): void {
  root.innerHTML = `
    <svg width="120" height="150" viewBox="0 0 120 150" stroke="currentColor" stroke-width="4" fill="none">
      <line x1="10" y1="140" x2="110" y2="140" />
      <line x1="30" y1="140" x2="30" y2="10" />
      <line x1="30" y1="10" x2="80" y2="10" />
      <line x1="80" y1="10" x2="80" y2="30" />
      <circle data-testid="parte" cx="80" cy="42" r="12" />
      <line data-testid="parte" x1="80" y1="54" x2="80" y2="95" />
      <line data-testid="parte" x1="80" y1="65" x2="60" y2="80" />
      <line data-testid="parte" x1="80" y1="65" x2="100" y2="80" />
      <line data-testid="parte" x1="80" y1="95" x2="65" y2="120" />
      <line data-testid="parte" x1="80" y1="95" x2="95" y2="120" />
    </svg>
    <p data-testid="word"></p>
    <p>Vidas: <span data-testid="lives"></span></p>
    <input type="text" maxlength="1" aria-label="Letra" />
    <p data-testid="message"></p>
    <button type="button" hidden>Jugar de nuevo</button>
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
    input.disabled = juego.terminada();
    partes.forEach((parte, i) => {
      parte.style.display = i < juego.errores() ? "" : "none";
    });
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!juego.esLetraValida(input.value)) {
        input.value = "";
        mensaje.textContent = "Ingresá una letra";
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
}