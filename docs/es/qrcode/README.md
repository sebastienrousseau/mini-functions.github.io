---
descripción: QRCode es una librería Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR en formato PNG o SVG. Utiliza la librería QRCode para añadir funcionalidad de generación de códigos QR a tus proyectos Rust.
lang: es-ES
metaTitle: QRCode - Una librería Rust que provee funciones fáciles de usar para generar imágenes de códigos QR.
permalink: /qrcode/

meta:
  - name: palabras clave
    content: código qr, rust, librería, generar, png, svg, imagen, generación código qr, licencia apache, licencia mit, imágenes código qr, proyectos rust, formato imagen, generar código qr, librería código qr, funcionalidad código qr, fácil de usar, funcionalidad generación código qr, librería generación código qr
  - nombre: twitter:card
    contenido: QRCode es una librería Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR en formato PNG o SVG. Utiliza la librería QRCode para añadir funcionalidad de generación de códigos QR a tus proyectos Rust.
  - nombre: twitter:descripción
    contenido: QRCode es una librería Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR en formato PNG o SVG. Utiliza la librería QRCode para añadir funcionalidad de generación de códigos QR a tus proyectos Rust.
  - nombre: twitter:title
    contenido: QRCode - Una librería Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR.
  - nombre: og:title
    contenido: QRCode - Una biblioteca Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR.
  - nombre: og:description
    contenido: QRCode es una librería Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR en formato PNG o SVG. Utiliza la librería QRCode para añadir funcionalidad de generación de códigos QR a tus proyectos Rust.
  - nombre: og:image:alt
    contenido: QRCode - Una librería Rust que proporciona funciones fáciles de usar para generar imágenes de códigos QR.
  - nombre: og:locale
    contenido: es_ES
---

# QRCode

QRCode es una librería Rust que proporciona funciones fáciles de usar para
generar imágenes de códigos QR en formato PNG o SVG.

## Uso

Para utilizar la librería QRCode, añade lo siguiente a tu fichero Cargo.toml:

  ```toml
[dependencias]
qrcode = "0.8"
```

A continuación, añade lo siguiente a tu código Rust:

  ``rust
extern crate image;
extern crate qrcode;

use image::{ImageBuffer, Rgb, RgbImage};
use qrcode::render::svg;
use qrcode::QrCode;

```

A continuación, puede crear una nueva estructura QRCode con los datos que desea
codificar en el código QR:

  ``rust
let qr_code = QRCode::new(vec![1, 2, 3]);
```

También puedes crear una estructura QRCode a partir de una cadena o un vector de bytes:

  ```cadena
let qr_code = QRCode::from_string("¡Hola, mundo!".to_string());
let qr_code = QRCode::from_bytes(vec![72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]);
```

Una vez que tengas una estructura `QRCode`, puedes utilizar los siguientes métodos para
generar imágenes de código QR:

- `to_qrcode`: crea un nuevo valor `QrCode` utilizando los datos almacenados en
  la estructura `QRCode
- `to_png`: crea una nueva imagen `PNG` del código QR utilizando los datos
  almacenados en la estructura `QRCode
- `to_svg`: crea una nueva imagen `SVG` del código QR utilizando los datos
  almacenados en la estructura `QRCode
- `colorize`: crea una nueva imagen `PNG` del código QR utilizando los datos
  almacenados en la estructura `QRCode` y un valor de color dado para colorear el código
  código QR

## Ejemplos

Aquí tienes un ejemplo de generación de una imagen PNG de un código QR:

  ``código
let qr_code = QRCode::new(vec![1, 2, 3]);
let imagen_png = qr_code.to_png();

```

Y aquí tienes un ejemplo de generación de una imagen SVG de un código QR:

  ``rust
let qr_code = QRCode::new(vec![1, 2, 3]);
let svg_image = qr_code.to_svg();
```

## Licencia

QRCode está licenciado bajo la Apache License, Version 2.0 y la
Licencia MIT.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator
