# language: es
@HU-09
Característica: Jugar de nuevo
  Como jugador
  quiero iniciar una nueva partida después de terminar una
  para seguir jugando sin recargar la página

  @CA-1
  Escenario: El jugador vuelve a jugar después de ganar
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "G"
    Y el jugador adivina la letra "A"
    Y el jugador adivina la letra "T"
    Y el jugador adivina la letra "O"
    Y el jugador toca "Jugar de nuevo"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas
    Y se ve el mensaje ""

  @CA-2
  Escenario: Al jugar de nuevo se usa otra palabra
    Dado una partida con el azar "0"
    Cuando el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Y el jugador adivina la letra "G"
    Y el jugador toca "Jugar de nuevo"
    Entonces se ve la palabra "_ _ _ _ _"