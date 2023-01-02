---
description: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
lang: es-ES
metaTitle: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
permalink: /functions/

meta:
  - name: keywords
    content: fecha, día, funciones, hora, iso_8601, biblioteca, microsegundo, milisegundo, minifunciones, minuto, mes, nanosegundo, now_utc, rust, segundo, hora, timestamp, utc, día de la semana, año
  - name: twitter:card
    content: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
  - name: twitter:description
    content: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
  - name: twitter:title
    content: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
  - name: og:title
    content: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
  - name: og:description
    content: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
  - name: og:image:alt
    content: Librería de funciones - Una colección de funciones útiles para trabajar con varios aspectos de un programa Rust.
  - name: og:locale
    content: es_ES
---

# Biblioteca de funciones para Rust 🦀

 `Mini Functions` es una biblioteca de funciones para el lenguaje de
 programación Rust que proporciona una colección de herramientas para
 trabajar con diversos aspectos de una aplicación Rust.

 Incluye una serie de funciones que pueden utilizarse para realizar
 diversas tareas, como recuperar y manipular información sobre la fecha
 y hora actuales, trabajar con cadenas y texto, y manejar estructuras de
 datos.

 Las funciones de `Mini Functions` están optimizadas para ofrecer
 velocidad y eficacia, lo que las hace útiles para una gran variedad de
 aplicaciones, incluidas aquellas que requieren un rendimiento rápido o
 que necesitan manejar grandes cantidades de datos.

## Funciones de fecha y hora

En esta sección encontrará información sobre las funciones de fecha y
hora que admite la biblioteca `mini-functions`.

Las funciones Fecha y hora se utilizan para recuperar y manipular
información sobre la fecha y la hora actuales. Pueden utilizarse para
obtener diversas partes de la fecha, como el día, el mes y el año, así
como diversas partes de la hora, como la hora, los minutos y los
segundos.

Estas funciones también pueden utilizarse para obtener la fecha y hora
actuales en distintos formatos, como una marca de tiempo o el formato
ISO 8601.

Actualmente se enumeran por orden alfabético en el siguiente cuadro:

### Tabla 1 - Funciones de la fecha (date.rs)

| Función | Descripción |
| -------- | ----------- |
| `date` | Devuelve la fecha actual en formato UTC. (`AAAA-MM-DD`) |
| `day` | Devuelve el día actual. (`1-31`) |
| `hour` | Devuelve la hora actual. (`0-23`) |
| `iso_8601` | Devuelve la fecha y hora actuales en formato ISO 8601. (`AAAA-MM-DDTHH:mm:ss.SSS±HHMM`) |
| `microsecond` | Devuelve el microsegundo actual. (`0-999999`) |
| `millisecond` | Devuelve el milisegundo actual. (`0-999`) |
| `minute` | Devuelve el minuto actual. (`0-59`) |
| `month` | Devuelve el mes actual. (`Enero-Diciembre`) |
| `nanosecond` | Devuelve el nanosegundo actual. (`0-999999999`) |
| `now_utc` | Devuelve la fecha y hora actuales en formato UTC. (`AAAA-MM-DDTHH:mm:ss.SSS±HH:MM:SS`) |
| `second` | Devuelve el segundo actual. (`0-59`) |
| `timestamp` | Devuelve la marca de tiempo actual en tiempo Unix en milisegundos. (`1610000000000`) |
| `weekday` | Devuelve el día de la semana actual. (`Domingo-Sábado`) |
| `year` | Devuelve el año actual. (`YYY`) |

Las funciones anteriores están relacionadas con la recuperación de
información sobre la fecha y hora actuales.

Las funciones `date` y `now_utc` devuelven la fecha actual, con
`now_utc` devolviendo también la hora actual además de la fecha.

Las funciones `day`, `hour`, `minute`, `month`, `second` y `year`
devuelven las partes respectivas de la fecha actual.

La función `weekday` devuelve el día actual de la semana, representando
el domingo como 0 y el sábado como 6.

La función `timestamp` devuelve la marca de tiempo actual, que es una
representación numérica de la fecha y hora actuales. Las funciones
`microsegundo`, `milisegundo` y `nanosegundo` devuelven partes
respectivas de la hora actual.

La función `iso_8601` devuelve la fecha y hora actuales en el formato
ISO 8601, que es una representación estandarizada de fechas y horas.

En general, estas funciones pueden ser útiles para recuperar y manipular
información sobre la fecha y hora actuales en un programa.

## Funciones de registro

En esta sección puedes encontrar información sobre las funciones Log que
soporta la librería `mini-functions`.

Las funciones Log se utilizan para registrar un mensaje en la consola,
lo que puede ser útil para depurar un programa.

La función Log se encuentra actualmente en la siguiente tabla:

### Tabla 2 - Función Log (log.rs)

| Función | Descripción |
| -------- | ----------- |
| `new` | Crea una nueva instancia de registro. |
| `log` | Registra un mensaje en la consola. |

La función `new` crea una nueva instancia de log, que puede utilizarse
para registrar mensajes en la consola. La función `log` registra un
mensaje en la consola utilizando la instancia log.

En general, estas funciones pueden ser útiles para registrar mensajes en
la consola, lo que puede ser útil para depurar un programa.

## Funciones UUID

En esta sección, puedes encontrar información sobre las funciones UUID
que soporta la librería `mini-functions`.

Las funciones UUID se utilizan para generar un UUID, que es un
identificador único que puede utilizarse para identificar un objeto
específico.

Las funciones UUID se enumeran actualmente en la siguiente tabla:

### Tabla 3 - Funciones UUID (uuid.rs)

| Función | Descripción |
| -------- | ----------- |
| `new` | Crea una nueva instancia UUID. |
| `uuid_v3` | Genera un UUID v3. |
| `uuid_v4` | Genera un UUID v4. |
| `uuid_v5` | Genera un UUID v5. |

La función `new` crea una nueva instancia UUID, que puede utilizarse
para generar UUIDs. Las funciones `uuid_v3`, `uuid_v4` y `uuid_v5`
generan un UUID utilizando una versión específica del estándar UUID.

En general, estas funciones pueden ser útiles para generar UUIDs, que
pueden ser útiles para identificar un objeto específico. Las funciones
`uuid_v3` y `uuid_v5` pueden ser útiles para generar UUIDs basados en un
nombre, mientras que la función `uuid_v4` puede ser útil para generar
UUIDs aleatorios.
