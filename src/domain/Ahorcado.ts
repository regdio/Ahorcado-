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

  
  private normalizar(texto: string): string {
    const sinTilde: Record<string, string> = { Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U", Ü: "U" };
    return texto.toUpperCase().replace(/[ÁÉÍÓÚÜ]/g, (c) => sinTilde[c]);
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
      .map((l) => (this.letrasAdivinadas.includes(this.normalizar(l)) ? l : "_"))
      .join(" ");
  }

  vidas(): number {
    return VIDAS_INICIALES - this.errores();
  }
  
  
  errores(): number {
    return this.letrasAdivinadas.filter((l) => !this.normalizar(this.palabra).includes(l)).length;
  }

  gano(): boolean {
    return this.letrasDeLaPalabra().every((l) => this.letrasAdivinadas.includes(this.normalizar(l)));
  }
  
  perdio(): boolean {
    return this.vidas() <= 0;
  }
  
  terminada(): boolean {
    return this.gano() || this.perdio();
  }

  
  reiniciar(): void {
    this.letrasAdivinadas = [];
  }
}