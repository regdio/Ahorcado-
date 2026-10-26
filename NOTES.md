# Ahorcado — Notas

## Links de entrega
- Repositorio: https://github.com/regdio/Ahorcado-
- App en producción: https://regdio.github.io/Ahorcado-/
- Pipeline (GitHub Actions): https://github.com/regdio/Ahorcado-/actions
- Análisis estático (SonarQube Cloud): https://sonarcloud.io/dashboard?id=regdio_Ahorcado
- Story Map: https://docs.google.com/document/d/11kgPLtHq3AV14IZ7cBIxkqOzxiKo0OYSa1oxiUObCxQ/edit?tab=t.0#heading=h.l6yg4fw508jh

### Evidencia de que el pipeline corta
- AT roto a propósito (rama `prueba-ci`): https://github.com/regdio/Ahorcado-/actions/runs/38485807321
- Quality gate de Sonar con un bug a propósito (rama `prueba-sonar`): https://github.com/regdio/Ahorcado-/actions/runs/39527447595
## Trazabilidad

### HU-01 — Iniciar partida
Como jugador, quiero iniciar una nueva partida para saber cuántas letras tiene la palabra que tengo que adivinar.

- CA-1: Al abrir la aplicación se ve la palabra oculta con guiones y 6 vidas.
  - AT: `features/iniciar-partida.feature` (@HU-01 @CA-1), esquema del escenario con GATO y PERRO
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
  - Estado: Done

- CA-2: No distingue mayúsculas de minúsculas (`a` = `A`).
  - AT: `features/adivinar-letras.feature` (@HU-03 @CA-2)
  - UTs:
    - adivinar en minúscula revela la letra
    - la palabra en minúscula también se revela
  - Estado: Done
 
- CA-3: Si se ingresa algo que no es una letra, se informa y no se pierden vidas.
  - Estado: Pendiente

### HU-05 — Contar errores
Como jugador, quiero que se cuenten mis errores para saber cuántas oportunidades me quedan.

- CA-1: Si la letra no está en la palabra, no se revela nada y las vidas bajan en 1.
  - AT: `features/fallar-letra.feature` (@HU-05 @CA-1)
  - UTs:
    - fallar una letra descuenta una vida
    - cada fallo descuenta una vida
  - Estado: Done 

### HU-07 — Ganar la partida
Como jugador, quiero saber cuándo gané al descubrir todas las letras para saber que terminé la partida con éxito.

- CA-1: Al completar la palabra se muestra "GANASTE".
  - AT: `features/ganar.feature` (@HU-07 @CA-1)
  - UTs:
    - gana al descubrir todas las letras
    - no gana si faltan letras
  - Estado: Done


### HU-08 — Perder la partida
Como jugador, quiero saber cuándo perdí y ver la palabra correcta para saber qué palabra era.

- CA-1: Al quedarme sin vidas se muestra "PERDISTE".
- CA-2: Al perder se revela la palabra completa.
  - AT: `features/perder.feature` (@HU-08 @CA-1 @CA-2)
  - UTs:
    - pierde al quedarse sin vidas
    - no pierde si le quedan vidas
    - al perder se revela la palabra
  - Estado: Done
- CA-3: Con la partida terminada no se pueden ingresar más letras.
  - AT: `features/perder.feature` (@HU-08 @CA-3)
  - UTs:
    - no se puede adivinar después de ganar
    - no se puede adivinar después de perder
  - Estado: en progreso


## Notas del proceso
- El commit 909e6ae se subió con un mensaje equivocado (decía `GREEN:` pero era un arreglo de formato y marcaba el CA-3 de HU-08 como terminado). Lo revertimos y rehicimos el arreglo con el prefijo correcto.
- Desde HU-07, cuando un test usa un método que todavía no existe, se agrega primero vacío, para que el rojo sea por el `expect` y no por "is not a function".
- La UI está excluida del coverage (en Vitest y en Sonar) porque se cubre con los Acceptance Tests, como pide la consigna.
- En HU-05 el `describe` de un test quedó anidado dentro del de otra historia; lo corregimos con un `REFACTOR:`.