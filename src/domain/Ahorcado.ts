const VIDAS_INICIALES = 6;

export class Ahorcado {
  private letrasAdivinadas: string[] = [];

  private palabra: string;

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
  }

  
  private letrasDeLaPalabra(): string[] {
    return this.palabra.split("");
  }

  adivinar(letra: string): void {
    if (this.gano() || this.perdio()) return;
    if (!this.esLetraValida(letra)) return;
    this.letrasAdivinadas.push(letra.toUpperCase());
  }

  
  esLetraValida(letra: string): boolean {
    return /^[A-ZÑ]$/i.test(letra);
  }

  palabraEnmascarada(): string {
    if (this.perdio()) {
      return this.letrasDeLaPalabra().join(" ");
    }
    return this.letrasDeLaPalabra()
      .map((l) => (this.letrasAdivinadas.includes(l) ? l : "_"))
      .join(" ");
  }

  vidas(): number {
    const fallos = this.letrasAdivinadas.filter((l) => !this.palabra.includes(l)).length;
    return VIDAS_INICIALES - fallos;
  }
  
  gano(): boolean {
    return this.letrasDeLaPalabra().every((l) => this.letrasAdivinadas.includes(l));
  }
  
  perdio(): boolean {
    return this.vidas() <= 0;
  }
  
  terminada(): boolean {
    return this.gano() || this.perdio();
  }

  
  reiniciar(): void {}
}