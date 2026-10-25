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
  
  - Nota: el commit `REFACTOR: HU-01 extraer constante` incluyó por error el cableado de la UI (`index.ts`, `main.ts`), que correspondía al `GREEN:` del AT. Lo dejamos en el historial y lo corregimos en el proceso: un refactor no agrega código.


### HU-03 — Adivinar letras
Como jugador, quiero ingresar una letra para ir descubriendo la palabra.

- CA-1: Si la letra está en la palabra, se revelan todas sus ocurrencias y no se pierden vidas.
  - AT: `features/adivinar-letras.feature` (@HU-03 @CA-1)
  - UTs:
    - adivinar una letra presente la revela
    - revela todas las ocurrencias
  - Estado: CA-1 Done

- CA-2: No distingue mayúsculas de minúsculas (`a` = `A`).
  - AT: `features/adivinar-letras.feature` (@HU-03 @CA-2)
  - UTs:
    - adivinar en minúscula revela la letra
    - la palabra en minúscula también se revela
  - Estado: en progreso
 
### HU-05 — Contar errores
Como jugador, quiero que se cuenten mis errores para saber cuántas oportunidades me quedan.

- CA-1: Si la letra no está en la palabra, no se revela nada y las vidas bajan en 1.
  - AT: `features/fallar-letra.feature` (@HU-05 @CA-1)
  - UTs:
    - fallar una letra descuenta una vida
    - cada fallo descuenta una vida
  - Estado: en progreso 


### HU-07 — Ganar la partida
Como jugador, quiero saber cuándo gané al descubrir todas las letras para saber que terminé la partida con éxito.

- CA-1: Al completar la palabra se muestra "GANASTE".
  - AT: `features/ganar.feature` (@HU-07 @CA-1)
  - UTs:
    - gana al descubrir todas las letras
    - no gana si faltan letras
  - Estado: Done