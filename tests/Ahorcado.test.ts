import { elegirPalabra } from "../src/domain/palabras";
import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("HU-01 iniciar partida", () => {
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
  
  it("reconoce si la entrada no es una letra", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.esLetraValida("1")).toBe(false);
  });
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
  
describe("HU-08 perder la partida", () => {
  it("pierde al quedarse sin vidas", () => {
    const juego = new Ahorcado("GATO");
    ["B", "C", "D", "E", "F", "H"].forEach((l) => juego.adivinar(l));
    expect(juego.perdio()).toBe(true);
  });
  
  it("no pierde si le quedan vidas", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.perdio()).toBe(false);
  });

  it("al perder se revela la palabra", () => {
    const juego = new Ahorcado("GATO");
    ["B", "C", "D", "E", "F", "H"].forEach((l) => juego.adivinar(l));
    expect(juego.palabraEnmascarada()).toBe("G A T O");
  });
});

describe("HU-08 CA-3 partida terminada", () => {
  it("no se puede adivinar después de ganar", () => {
    const juego = new Ahorcado("GATO");
    ["G", "A", "T", "O"].forEach((l) => juego.adivinar(l));
    juego.adivinar("E");
    expect(juego.vidas()).toBe(6);
  });

  it("no se puede adivinar después de perder", () => {
    const juego = new Ahorcado("GATO");
    ["B", "C", "D", "E", "F", "H"].forEach((l) => juego.adivinar(l));
    juego.adivinar("Z");
    expect(juego.vidas()).toBe(0);
  });
});

describe("HU-03 CA-3 entrada inválida", () => {
  it("un número no descuenta vidas", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("1");
    expect(juego.vidas()).toBe(6);
  });
  
  it("un símbolo no descuenta vidas", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("?");
    expect(juego.vidas()).toBe(6);
  });
});


describe("HU-09 jugar de nuevo", () => {
  it("la partida termina al ganar", () => {
    const juego = new Ahorcado("GATO");
    ["G", "A", "T", "O"].forEach((l) => juego.adivinar(l));
    expect(juego.terminada()).toBe(true);
  });
  
  it("la partida no termina mientras se juega", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    expect(juego.terminada()).toBe(false);
  });

  
  it("reiniciar vuelve a empezar la partida", () => {
    const juego = new Ahorcado("GATO");
    ["G", "A", "T", "O"].forEach((l) => juego.adivinar(l));
    juego.reiniciar();
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
});


describe("HU-06 dibujo progresivo", () => {
  it("un error suma un error", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.errores()).toBe(1);
  });
  
  it("cuenta cada error", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    juego.adivinar("I");
    juego.adivinar("U");
    expect(juego.errores()).toBe(3);
  });
});


describe("HU-12 palabra al azar", () => {
  it("elige la primera palabra si el azar es 0", () => {
      const palabra = elegirPalabra(["MANZANA", "PERRO", "CASA"], () => 0);
      expect(palabra).toBe("MANZANA");
  });
  
  it("elige la palabra según el azar", () => {
    const palabra = elegirPalabra(["MANZANA", "PERRO", "CASA"], () => 0.9);
    expect(palabra).toBe("CASA");
  });
});


describe("HU-18 acentos", () => {
  it("una vocal revela su versión con tilde", () => {
    const juego = new Ahorcado("CAMIÓN");
    juego.adivinar("O");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _ Ó _");
  });
  
  it("una vocal no descuenta vidas si la palabra la tiene con tilde", () => {
    const juego = new Ahorcado("CAMIÓN");
    juego.adivinar("O");
    expect(juego.vidas()).toBe(6);
  });
  
  it("se gana adivinando las vocales sin tilde", () => {
    const juego = new Ahorcado("CAMIÓN");
    ["C", "A", "M", "I", "O", "N"].forEach((l) => juego.adivinar(l));
    expect(juego.gano()).toBe(true);
  });
  
  it("escribir una vocal con tilde cuenta como la vocal", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("á");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });
});