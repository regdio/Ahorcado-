export const PALABRAS = ["MANZANA", "PERRO", "GUITARRA", "ELEFANTE", "TECLADO", "MONTAÑA"];

export function elegirPalabra(lista: string[], azar: () => number): string {
  return lista[Math.floor(azar() * lista.length)];
}

export function elegirOtraPalabra(lista: string[], anterior: string, azar: () => number): string {
  return elegirPalabra(lista.filter((p) => p !== anterior), azar);
}