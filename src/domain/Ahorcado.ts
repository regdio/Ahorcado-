export class Ahorcado {
  constructor(private palabra: string) {}

  palabraEnmascarada(): string {
    return "_ _ _ _";
  }

  vidas(): number {
    return 6;
  }
}