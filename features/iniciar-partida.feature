# language: es
@HU-01
Característica: Iniciar partida
  Como jugador
  quiero iniciar una nueva partida
  para saber cuántas letras tiene la palabra que tengo que adivinar

  @CA-1
  Esquema del escenario: Al abrir la app se ve la palabra oculta y las vidas iniciales
    Dado una partida con la palabra "<palabra>"
    Entonces se ve la palabra "<oculta>"
    Y se ven 6 vidas

    Ejemplos:
      | palabra | oculta    |
      | GATO    | _ _ _ _   |
      | PERRO   | _ _ _ _ _ |