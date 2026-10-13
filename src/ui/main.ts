import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado): void {
  root.innerHTML = `
    <p data-testid="word"></p>
    <p>Vidas: <span data-testid="lives"></span></p>
    <input type="text" maxlength="1" aria-label="Letra" />
  `;

  const palabra = root.querySelector<HTMLElement>('[data-testid="word"]')!;
  const vidas = root.querySelector<HTMLElement>('[data-testid="lives"]')!;
  const input = root.querySelector<HTMLInputElement>("input")!;

  function render(): void {
    palabra.textContent = juego.palabraEnmascarada();
    vidas.textContent = String(juego.vidas());
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      juego.adivinar(input.value);
      input.value = "";
      render();
    }
  });

  render();
}