# language: es
@HU-01
Característica: Iniciar partida
  Como jugador
  quiero iniciar una nueva partida
  para empezar a jugar

  @CA-1
  Escenario: Al abrir la app se ve la palabra oculta y las vidas iniciales
    Dado una partida con la palabra "GATO"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas