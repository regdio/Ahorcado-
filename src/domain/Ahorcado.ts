const VIDAS_INICIALES = 6;

export class Ahorcado {
  private letrasAdivinadas: string[] = [];

  constructor(private palabra: string) {}

  adivinar(letra: string): void {
    this.letrasAdivinadas.push(letra);
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((l) => (this.letrasAdivinadas.includes(l) ? l : "_"))
      .join(" ");
  }

  vidas(): number {
    return VIDAS_INICIALES;
  }
}