---
description : QRCode est une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR au format PNG ou SVG. Utilisez la bibliothèque QRCode pour ajouter une fonctionnalité de génération de codes QR à vos projets Rust.
lang : en-GB
metaTitle : QRCode - Une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR.
permalien : /qrcode/

meta :
  - name : keywords
    content : qr code, rust, library, generate, png, svg, image, qr code generation, apache license, mit license, qr code images, rust projects, image format, generate qr code, qr code library, qr code functionality, easy-to-use, qr code generation functionality, qr code generation library
  - nom : twitter:card
    contenu : QRCode est une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR au format PNG ou SVG. Utilisez la bibliothèque QRCode pour ajouter une fonctionnalité de génération de codes QR à vos projets Rust.
  - nom : twitter:description
    content : QRCode est une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR au format PNG ou SVG. Utilisez la bibliothèque QRCode pour ajouter une fonctionnalité de génération de codes QR à vos projets Rust.
  - name : twitter:title
    content : QRCode - Une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR.
  - name : og:title
    Contenu : QRCode - Une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR.
  - name : og:description
    content : QRCode est une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR au format PNG ou SVG. Utilisez la bibliothèque QRCode pour ajouter une fonctionnalité de génération de codes QR à vos projets Rust.
  - name : og:image:alt
    content : QRCode - Une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour générer des images de codes QR.
  - name : og:locale
    Contenu : en_GB
---

# QRCode

QRCode est une bibliothèque Rust qui fournit des fonctions faciles à utiliser pour
pour générer des images de codes QR au format PNG ou SVG.

## Utilisation

Pour utiliser la bibliothèque QRCode, ajoutez ce qui suit à votre fichier Cargo.toml :

  ```toml
[dépendances]
qrcode = "0.8"
```

Ensuite, ajoutez ce qui suit à votre code Rust :

  ``rust
extern crate image ;
extern crate qrcode ;

use image::{ImageBuffer, Rgb, RgbImage} ;
use qrcode::render::svg ;
utiliser qrcode::QrCode ;

```

Ensuite, vous pouvez créer une nouvelle structure QRCode avec les données que vous voulez
encoder dans le code QR :

  ``Vous pouvez
let qr_code = QRCode::new(vec ![1, 2, 3]) ;
```

Vous pouvez également créer une structure QRCode à partir d'une chaîne ou d'un vecteur d'octets :

let qr_code = QRCode::from_string("Hello, world !".to_string()) ;
let qr_code = QRCode::from_bytes(vec ![72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]) ;

```

Une fois que vous avez une structure `QRCode`, vous pouvez utiliser les méthodes suivantes pour
générer des images de code QR :

- `to_qrcode` : crée une nouvelle valeur `QrCode` en utilisant les données stockées dans
  la structure `QRCode`.
- `to_png` : crée une nouvelle image `PNG` du code QR en utilisant les données
  stockées dans la structure `QRCode`.
- `to_svg` : crée une nouvelle image `SVG` du code QR en utilisant les données
  stockées dans la structure `QRCode`.
- `colorize` : crée une nouvelle image `PNG` du code QR en utilisant les données
  données stockées dans la structure `QRCode` et une valeur de couleur donnée pour coloriser le
  code QR

## Exemples

Voici un exemple de génération d'une image PNG d'un code QR :

  ``Brust
let qr_code = QRCode::new(vec ![1, 2, 3]) ;
let png_image = qr_code.to_png() ;
```

Et voici un exemple de génération d'une image SVG d'un code QR :

  ```rust
let qr_code = QRCode::new(vec ![1, 2, 3]) ;
let svg_image = qr_code.to_svg() ;
```

## Licence

QRCode est sous licence Apache, version 2.0 et MIT.
licence MIT.

Traduit avec www.DeepL.com/Translator (version gratuite)
