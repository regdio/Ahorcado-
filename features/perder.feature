# language: es
@HU-08
Característica: Perder la partida
  Como jugador
  quiero saber cuándo perdí y ver la palabra correcta
  para saber qué palabra era

  @CA-1 @CA-2
  Escenario: El jugador pierde al quedarse sin vidas
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Y el jugador adivina la letra "H"
    Entonces se ve el mensaje "PERDISTE"
    Y se ve la palabra "G A T O"
    Y se ven 0 vidas 