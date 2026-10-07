export class Ahorcado {
  constructor(private palabra: string) {}

  palabraEnmascarada(): string {
    return this.palabra.split("").map(() => "_").join(" ");
  }

  vidas(): number {
    return 6;
  }
}