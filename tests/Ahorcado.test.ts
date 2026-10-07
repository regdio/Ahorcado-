import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("inicializa con la palabra oculta", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });

  it("arranca con 6 vidas", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.vidas()).toBe(6);
  });

  it("la palabra oculta tiene un guion por letra", () => {
    const juego = new Ahorcado("ALA");
    expect(juego.palabraEnmascarada()).toBe("_ _ _");
  });
});