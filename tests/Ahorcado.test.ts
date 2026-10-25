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


describe("HU-03 adivinar letras", () => {
  it("adivinar una letra presente la revela", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });

    it("revela todas las ocurrencias", () => {
    const juego = new Ahorcado("ALA");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("A _ A");
  });
    it("adivinar en minúscula revela la letra", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("a");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });
  it("la palabra en minúscula también se revela", () => {
    const juego = new Ahorcado("gato");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });

  
describe("HU-05 contar errores", () => {
  it("fallar una letra descuenta una vida", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.vidas()).toBe(5);
  });
  it("cada fallo descuenta una vida", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    juego.adivinar("I");
    expect(juego.vidas()).toBe(4);
  });
});

describe("HU-07 ganar la partida", () => {
  it("gana al descubrir todas las letras", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");
    expect(juego.gano()).toBe(true);
  });
    it("no gana si faltan letras", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    expect(juego.gano()).toBe(false);
  });
});

});
