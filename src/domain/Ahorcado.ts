const VIDAS_INICIALES = 6;
export class Ahorcado {
  private adivinoLetra = false;
  constructor(private palabra: string) {}

  adivinar(letra: string): void {
    this.adivinoLetra = true;
  }

  palabraEnmascarada(): string {
    if (this.adivinoLetra) {
      return "_ A _ _";
    }
    return this.palabra.split("").map(() => "_").join(" ");
  }

  vidas(): number {
    return VIDAS_INICIALES;
  }
}