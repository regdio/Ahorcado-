# language: es
@HU-18
Característica: Acentos
  Como jugador
  quiero que las letras con tilde cuenten como su vocal sin tilde
  para no perder vidas por los acentos

  @CA-1 @CA-2
  Escenario: Las vocales con tilde cuentan como su vocal
    Dado una partida con la palabra "CAMIÓN"
    Cuando el jugador adivina la letra "O"
    Y el jugador adivina la letra "í"
    Entonces se ve la palabra "_ _ _ Í Ó _"
    Y se ven 6 vidas