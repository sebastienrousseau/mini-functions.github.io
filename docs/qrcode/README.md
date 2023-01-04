---
description: QRCode is a Rust library that provides easy-to-use functions for generating QR code images in PNG or SVG format. Use the QRCode library to add QR code generation functionality to your Rust projects.
lang: en-GB
metaTitle: QRCode — A Rust library that provides easy-to-use functions for generating QR code images.
permalink: /qrcode/

meta:
  - name: keywords
    content: qr code, rust, library, generate, png, svg, image, qr code generation, apache license, mit license, qr code images, rust projects, image format, generate qr code, qr code library, qr code functionality, easy-to-use, qr code generation functionality, qr code generation library
  - name: twitter:card
    content: QRCode is a Rust library that provides easy-to-use functions for generating QR code images in PNG or SVG format. Use the QRCode library to add QR code generation functionality to your Rust projects.
  - name: twitter:description
    content: QRCode is a Rust library that provides easy-to-use functions for generating QR code images in PNG or SVG format. Use the QRCode library to add QR code generation functionality to your Rust projects.
  - name: twitter:title
    content: QRCode — A Rust library that provides easy-to-use functions for generating QR code images.
  - name: og:title
    content: QRCode — A Rust library that provides easy-to-use functions for generating QR code images.
  - name: og:description
    content: QRCode is a Rust library that provides easy-to-use functions for generating QR code images in PNG or SVG format. Use the QRCode library to add QR code generation functionality to your Rust projects.
  - name: og:image:alt
    content: QRCode — A Rust library that provides easy-to-use functions for generating QR code images.
  - name: og:locale
    content: en_GB
---

# QRCode

QRCode is a Rust library that provides easy-to-use functions for
generating QR code images in PNG or SVG format.

## Usage

To use the QRCode library, add the following to your Cargo.toml file:

  ```toml
[dependencies]
qrcode = "0.8"
```

Next, add the following to your Rust code:

  ```rust
extern crate image;
extern crate qrcode;

use image::{ImageBuffer, Rgb, RgbImage};
use qrcode::render::svg;
use qrcode::QrCode;
```

Then, you can create a new QRCode struct with the data you want to
encode in the QR code:

  ```rust
let qr_code = QRCode::new(vec![1, 2, 3]);
```

You can also create a QRCode struct from a string or a vector of bytes:

  ```rust
let qr_code = QRCode::from_string("Hello, world!".to_string());
let qr_code = QRCode::from_bytes(vec![72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]);
```

Once you have a `QRCode` struct, you can use the following methods to
generate QR code images:

- `to_qrcode`: creates a new `QrCode` value using the data stored in
  the `QRCode` struct
- `to_png`: creates a new `PNG` image of the QR code using the data
  stored in the `QRCode` struct
- `to_svg`: creates a new `SVG` image of the QR code using the data
  stored in the `QRCode` struct
- `colorize`: creates a new `PNG` image of the QR code using the data
  stored in the `QRCode` struct and a given color value to colorize the
  QR code

## Examples

Here's an example of generating a PNG image of a QR code:

  ```rust
let qr_code = QRCode::new(vec![1, 2, 3]);
let png_image = qr_code.to_png();
```

And here's an example of generating an SVG image of a QR code:

  ```rust
let qr_code = QRCode::new(vec![1, 2, 3]);
let svg_image = qr_code.to_svg();
```

## License

QRCode is licensed under the Apache License, Version 2.0 and the
MIT License.
