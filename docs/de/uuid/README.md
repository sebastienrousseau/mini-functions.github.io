---
description: Die `UUID`-Struktur bietet Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5
lang: de-DE
metaTitle: UUID - Eine Struktur in Rust, die Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5 bereitstellt.
permalink: /uuid/

meta:
  - name: keywords
    content: uuid, v3, v4, v5, generation, rust, crate, struct, fmt::display trait, universell eindeutiger Bezeichner, eindeutiger Bezeichner, Version 3, Version 4, Version 5, uuid generation, uuid struct, uuid crate, display trait, rust uuid, uuid version
  - name: twitter:card
    content: Die `UUID`-Struktur bietet Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5
  - name: twitter:description
    content: Die `UUID`-Struktur bietet Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5
  - name: twitter:title
    content: UUID - Eine Struktur in Rust, die Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5 bereitstellt.
  - name: og:title
    content: UUID - Eine Struktur in Rust, die Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5 bereitstellt.
  - name: og:description
    content: Die `UUID`-Struktur bietet Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5
  - name: og:image:alt
    content: UUID - Eine Struktur in Rust, die Methoden zur Erzeugung neuer UUIDs (Universally Unique Identifiers) in Version 3, 4 oder 5 bereitstellt.
  - name: og:locale
    content: de_DE
---

# UUID

Die `UUID`-Struktur bietet eine Umhüllung für den Typ `uuid::Uuid` aus
der `uuid`-Kiste. Sie bietet Methoden zur Erzeugung neuer UUIDs
(Universally Unique Identifiers) in Version 3, 4 oder 5.

## Beispiele

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

## Methoden

### `new`

```rust
pub fn new(version: u8, ns: &Uuid, name: &str) -> Self
```

Erzeugt eine neue UUID in der angegebenen Version. Der Parameter "ns"
ist der für die UUID zu verwendende Namespace und muss eine gültige UUID
sein. Der Parameter "name" ist der Name, der für die UUID verwendet
werden soll.

### `uuid_v3`

```rust
pub fn uuid_v3(ns: &Uuid, name: &str) -> Self
```

Erzeugt eine neue v3 UUID. Der Parameter "ns" ist der für die UUID zu
verwendende Namespace und muss eine gültige UUID sein. Der Parameter
"name" ist der "Name", der für die UUID verwendet werden soll.

### `uuid_v4`

```rust
pub fn uuid_v4() -> Self
```

Erzeugt eine neue v4 UUID.

### `uuid_v5`

```rust
pub fn uuid_v5(ns: &Uuid, name: &str) -> Self
```

Erzeugt eine neue v5 UUID. Der Parameter "ns" ist der für die UUID zu
verwendende Namespace und muss eine gültige UUID sein. Der Parameter
"name" ist der Name, der für die UUID verwendet werden soll.

## Durchführungsbestimmungen

### `fmt::Display`

Diese Implementierung der Eigenschaft `fmt::Display` erlaubt es,
Instanzen von `UUID` unter Verwendung des Formatierungsplatzhalters `{}`
zu drucken. Das Makro `write!` wird verwendet, um die String-
Repräsentation von `self.inner` in den bereitgestellten `fmt::Formatter`
zu schreiben. Der Typ `fmt::Result` wird zurückgegeben, um anzuzeigen,
ob die Operation erfolgreich war oder nicht.
