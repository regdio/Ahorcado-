# language: es
@HU-05
Característica: Contar errores
  Como jugador
  quiero que se cuenten mis errores
  para saber cuántas oportunidades me quedan

  @CA-1
  Escenario: El jugador falla dos letras
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "I"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 4 vidas