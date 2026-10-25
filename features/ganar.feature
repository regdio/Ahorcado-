# language: es
@HU-07
Característica: Ganar la partida
  Como jugador
  quiero saber cuándo gané al descubrir todas las letras
  para saber que terminé la partida con éxito

  @CA-1
  Escenario: El jugador gana al completar la palabra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "G"
    Y el jugador adivina la letra "A"
    Y el jugador adivina la letra "T"
    Y el jugador adivina la letra "O"
    Entonces se ve el mensaje "GANASTE"