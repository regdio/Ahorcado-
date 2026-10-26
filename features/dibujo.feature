# language: es
@HU-06
Característica: Dibujo progresivo del ahorcado
  Como jugador
  quiero que el ahorcado avance visualmente cuando cometo un error
  para ver qué tan cerca estoy de perder

  @CA-1
  Escenario: Cada error dibuja una parte del ahorcado
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "I"
    Entonces se ven 2 partes del ahorcado