export const PALABRAS = ["MANZANA", "PERRO", "GUITARRA", "ELEFANTE", "TECLADO", "MONTAÑA"];

export function elegirPalabra(lista: string[], azar: () => number): string {
  return lista[Math.floor(azar() * lista.length)];
}