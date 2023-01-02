---
description: La estructura `UUID` proporciona métodos para generar nuevos UUID (Identificadores Universales Únicos) en las versiones 3, 4 ó 5.
lang: es-ES
metaTitle: UUID - Una estructura en Rust que proporciona métodos para generar nuevos UUIDs (Identificadores Universales Únicos) en las versiones 3, 4 o 5.
permalink: /uuid/

meta:
  - name: keywords
    content: uuid, v3, v4, v5, generation, rust, crate, struct, fmt::display trait, identificador único universal, identificador único, versión 3, versión 4, versión 5, uuid generation, uuid struct, uuid crate, display trait, rust uuid, uuid version
  - name: twitter:card
    content: La estructura `UUID` proporciona métodos para generar nuevos UUID (Identificadores Universales Únicos) en las versiones 3, 4 ó 5.
  - name: twitter:description
    content: La estructura `UUID` proporciona métodos para generar nuevos UUID (Identificadores Universales Únicos) en las versiones 3, 4 ó 5.
  - name: twitter:title
    content: UUID - Una estructura en Rust que proporciona métodos para generar nuevos UUIDs (Identificadores Universales Únicos) en las versiones 3, 4 o 5.
  - name: og:title
    content: UUID - Una estructura en Rust que proporciona métodos para generar nuevos UUIDs (Identificadores Universales Únicos) en las versiones 3, 4 o 5.
  - name: og:description
    content: La estructura `UUID` proporciona métodos para generar nuevos UUID (Identificadores Universales Únicos) en las versiones 3, 4 ó 5.
  - name: og:image:alt
    content: UUID - Una estructura en Rust que proporciona métodos para generar nuevos UUIDs (Identificadores Universales Únicos) en las versiones 3, 4 o 5.
  - name: og:locale
    content: es_ES
---

# UUID

La estructura `UUID` proporciona una envoltura alrededor del tipo
`uuid::Uuid` de la crate `uuid`. Proporciona métodos para generar nuevos
UUIDs (Universally Unique Identifiers) en las versiones 3, 4 o 5.

## Ejemplos

```rust
use uuid::Uuid;
use my_crate::UUID;

let ns = Uuid::parse_str("6ba7b810-9dad-11d1-80b4-00c04fd430c8").unwrap();
let name = "my_name";

let uuid_v3 = UUID::new(3, &ns, name);
let uuid_v4 = UUID::new(4, &ns, name);
let uuid_v5 = UUID::new(5, &ns, name);

assert_eq!(uuid_v3.to_string().is_err(), false);
assert_eq!(uuid_v4.to_string().is_err(), false);
assert_eq!(uuid_v5.to_string().is_err(), false);
```

## Métodos

### `new`

```rust
pub fn new(version: u8, ns: &Uuid, name: &str) -> Self
```

Genera un nuevo UUID en la versión especificada. El parámetro `ns` es el
espacio de nombres a utilizar para el UUID y debe ser un UUID válido.
El parámetro `name` es el nombre a utilizar para el UUID.

### `uuid_v3`

```rust
pub fn uuid_v3(ns: &Uuid, name: &str) -> Self
```

Genera un nuevo UUID v3. El parámetro `ns` es el espacio de nombres que
se utilizará para el UUID y debe ser un UUID válido. El parámetro name
es el `nombre` que se utilizará para el UUID.

### `uuid_v4`

```rust
pub fn uuid_v4() -> Self
```

Genera un nuevo UUID v4.

### `uuid_v5`

```rust
pub fn uuid_v5(ns: &Uuid, name: &str) -> Self
```

Genera un nuevo UUID v5. El parámetro `ns` es el espacio de nombres que
se utilizará para el UUID y debe ser un UUID válido. El parámetro `name`
es el nombre que se utilizará para el UUID.

## Implementaciones

### `fmt::Display`

Esta implementación del rasgo `fmt::Display` permite imprimir instancias
de `UUID` utilizando el marcador de posición de formato `{}`. La macro
`write!` se utiliza para escribir la representación de cadena de
`self.inner` en el `fmt::Formatter` proporcionado. Se devuelve el tipo
`fmt::Result` para indicar si la operación se ha realizado correctamente
o no.
