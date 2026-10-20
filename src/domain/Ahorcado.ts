const VIDAS_INICIALES = 6;

export class Ahorcado {
  private letrasAdivinadas: string[] = [];

  private palabra: string;

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
  }

  adivinar(letra: string): void {
    this.letrasAdivinadas.push(letra.toUpperCase());
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((l) => (this.letrasAdivinadas.includes(l) ? l : "_"))
      .join(" ");
  }

  vidas(): number {
    const huboFallo = this.letrasAdivinadas.some((l) => !this.palabra.includes(l));
    return huboFallo ? VIDAS_INICIALES - 1 : VIDAS_INICIALES;
  }
}