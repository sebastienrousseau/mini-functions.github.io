---
description: The `UUID` struct provides provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5
lang: en-GB
metaTitle: UUID — A struct in Rust that provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5.
permalink: /uuid/

meta:
  - name: keywords
    content: uuid, v3, v4, v5, generation, rust, crate, struct, fmt::display trait, universally unique identifier, unique identifier, version 3, version 4, version 5, uuid generation, uuid struct, uuid crate, display trait, rust uuid, uuid version
  - name: twitter:card
    content: The `UUID` struct provides provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5
  - name: twitter:description
    content: The `UUID` struct provides provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5
  - name: twitter:title
    content: UUID — A struct in Rust that provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5.
  - name: og:title
    content: UUID — A struct in Rust that provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5.
  - name: og:description
    content: The `UUID` struct provides provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5
  - name: og:image:alt
    content: UUID — A struct in Rust that provides methods for generating new UUIDs (Universally Unique Identifiers) in version 3, 4, or 5.
  - name: og:locale
    content: en_GB
---

# UUID

The `UUID` struct provides a wrapper around the `uuid::Uuid` type from
the `uuid` crate. It provides methods for generating new UUIDs
(Universally Unique Identifiers) in version 3, 4, or 5.

## Examples

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

## Methods

### `new`

```rust
pub fn new(version: u8, ns: &Uuid, name: &str) -> Self
```

Generates a new UUID in the specified version. The `ns` parameter is the
namespace to use for the UUID and must be a valid UUID. The `name`
parameter is the name to use for the UUID.

### `uuid_v3`

```rust
pub fn uuid_v3(ns: &Uuid, name: &str) -> Self
```

Generates a new v3 UUID. The `ns` parameter is the namespace to use for
the UUID and must be a valid UUID. The name parameter is the `name` to
use for the UUID.

### `uuid_v4`

```rust
pub fn uuid_v4() -> Self
```

Generates a new v4 UUID.

### `uuid_v5`

```rust
pub fn uuid_v5(ns: &Uuid, name: &str) -> Self
```

Generates a new v5 UUID. The `ns` parameter is the namespace to use for
the UUID and must be a valid UUID. The `name` parameter is the name to
use for the UUID.

## Implementations

### `fmt::Display`

This implementation of the `fmt::Display` trait allows instances of
`UUID` to be printed using the `{}` formatting placeholder. The `write!`
macro is used to write the string representation of `self.inner` to the
provided `fmt::Formatter`. The `fmt::Result` type is returned to
indicate whether the operation was successful or not.
