---
description: La structure `UUID` fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
lang: fr-FR
metaTitle: UUID - Une structure dans Rust qui fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
permalink: /uuid/

meta:
  - name: keywords
    content: uuid, v3, v4, v5, generation, rust, crate, struct, fmt::display trait, universally unique identifier, unique identifier, version 3, version 4, version 5, uuid generation, uuid struct, uuid crate, display trait, rust uuid, uuid version
  - name: twitter:card
    content: La structure `UUID` fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
  - name: twitter:description
    content: La structure `UUID` fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
  - name: twitter:title
    content: UUID - Une structure dans Rust qui fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
  - name: og:title
    content: UUID - Une structure dans Rust qui fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
  - name: og:description
    content: La structure `UUID` fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
  - name: og:image:alt
    content: UUID - Une structure dans Rust qui fournit des méthodes pour générer de nouveaux UUID (Universally Unique Identifiers) dans la version 3, 4 ou 5.
  - name: og:locale
    content: fr_FR
---

# UUID

La structure `UUID` fournit une enveloppe autour du type `uuid::Uuid` de
la boîte `uuid`. Elle fournit des méthodes pour générer de nouveaux
UUIDs (Universally Unique Identifiers) en version 3, 4 ou 5.

## Exemples

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

## Méthodes

### `new`

```rust
pub fn new(version: u8, ns: &Uuid, name: &str) -> Self
```

Génère un nouvel UUID dans la version spécifiée. Le paramètre `ns` est
l'espace de nom à utiliser pour l'UUID et doit être un UUID valide. Le
paramètre `name` est le nom à utiliser pour l'UUID.

### `uuid_v3`

```rust
pub fn uuid_v3(ns: &Uuid, name: &str) -> Self
```

Génère un nouvel UUID v3. Le paramètre `ns` est l'espace de nom à
utiliser pour l'UUID et doit être un UUID valide. Le paramètre name est
le `name` à utiliser pour l'UUID.

### `uuid_v4`

```rust
pub fn uuid_v4() -> Self
```

Génère un nouvel UUID v4.

### `uuid_v5`

```rust
pub fn uuid_v5(ns: &Uuid, name: &str) -> Self
```

Génère un nouvel UUID v5. Le paramètre `ns` est l'espace de nom à
utiliser pour l'UUID et doit être un UUID valide. Le paramètre `name`
est le nom à utiliser pour l'UUID.

## Implémentations

### `fmt::Display`

Cette implémentation du trait `fmt::Display` permet d'imprimer les
instances de `UUID` en utilisant le caractère de remplacement de
formatage `{}`. La macro `write!` est utilisée pour écrire la
représentation de la chaîne de caractères de `self.inner` dans le
`fmt::Formatter` fourni. Le type `fmt::Resultat` est retourné pour
indiquer si l'opération a réussi ou non.
