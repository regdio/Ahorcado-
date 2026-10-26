# language: es
@HU-12
Característica: Palabra al azar
  Como jugador
  quiero recibir una palabra al azar de una lista
  para que cada partida sea distinta

  @CA-1
  Escenario: Sin palabra en la URL se juega con una palabra de la lista
    Dado una partida con el azar "0"
    Cuando el jugador adivina la letra "A"
    Entonces se ve la palabra "_ A _ _ A _ A"