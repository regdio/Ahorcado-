import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(root: HTMLElement, juego: Ahorcado): void {
  root.innerHTML = `
    <p data-testid="word">${juego.palabraEnmascarada()}</p>
    <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
  `;
}