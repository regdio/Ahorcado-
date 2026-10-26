import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado): void {
  root.innerHTML = `
    <p data-testid="word"></p>
    <p>Vidas: <span data-testid="lives"></span></p>
    <input type="text" maxlength="1" aria-label="Letra" />
    <p data-testid="message"></p>
  `;

  const palabra = root.querySelector<HTMLElement>('[data-testid="word"]')!;
  const vidas = root.querySelector<HTMLElement>('[data-testid="lives"]')!;
  const input = root.querySelector<HTMLInputElement>("input")!;
  const mensaje = root.querySelector<HTMLElement>('[data-testid="message"]')!;

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

  render();
}