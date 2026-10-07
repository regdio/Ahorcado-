# Ahorcado — Notas

## Story Map
Link:(https://docs.google.com/document/d/11kgPLtHq3AV14IZ7cBIxkqOzxiKo0OYSa1oxiUObCxQ/edit?tab=t.0#heading=h.l6yg4fw508jh)

## Trazabilidad

### HU-01 — Iniciar partida
Como jugador, quiero iniciar una nueva partida para empezar a jugar.

- CA-1: Al abrir la aplicación se ve la palabra oculta con guiones y 6 vidas.
  - AT: `features/iniciar-partida.feature` (@HU-01 @CA-1)
  - UTs:
    - inicializa con la palabra oculta
    - arranca con 6 vidas
    - la palabra oculta tiene un guion por letra
  - Estado: Done