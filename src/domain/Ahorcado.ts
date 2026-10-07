const VIDAS_INICIALES = 6;
export class Ahorcado {
  constructor(private palabra: string) {}

  palabraEnmascarada(): string {
    return this.palabra.split("").map(() => "_").join(" ");
  }

  vidas(): number {
    return VIDAS_INICIALES;
  }
}