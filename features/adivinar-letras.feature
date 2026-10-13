# language: es
@HU-03
Característica: Adivinar letras
  Como jugador
  quiero ingresar una letra
  para ir descubriendo la palabra

  @CA-1
  Escenario: El jugador acierta una letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Entonces se ve la palabra "_ A _ _"
    Y se ven 6 vidas