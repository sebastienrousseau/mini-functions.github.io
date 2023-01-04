---
Beschreibung: QRCode ist eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern im PNG- oder SVG-Format bietet. Verwenden Sie die QRCode-Bibliothek, um Ihre Rust-Projekte um QR-Code-Generierungsfunktionen zu erweitern.
lang: de-DE
metaTitle: QRCode - Eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern bereitstellt.
permalink: /qrcode/

meta:
  - name: keywords
    Inhalt: qr code, rost, bibliothek, generieren, png, svg, bild, qr code generierung, apache lizenz, mit lizenz, qr code bilder, rost projekte, bildformat, qr code generieren, qr code bibliothek, qr code funktionalität, einfach zu benutzen, qr code generierungsfunktionalität, qr code generierungsbibliothek
  - name: twitter:karte
    Inhalt: QRCode ist eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern im PNG- oder SVG-Format bietet. Verwenden Sie die QRCode-Bibliothek, um Ihren Rust-Projekten Funktionen zur Erzeugung von QR-Codes hinzuzufügen.
  - name: twitter:beschreibung
    Inhalt: QRCode ist eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern im PNG- oder SVG-Format bietet. Verwenden Sie die QRCode-Bibliothek, um Ihren Rust-Projekten Funktionen zur Erzeugung von QR-Codes hinzuzufügen.
  - name: twitter:titel
    Inhalt: QRCode - Eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern bereitstellt.
  - name: og:titel
    content: QRCode - Eine Rust-Bibliothek, die einfach zu bedienende Funktionen für die Erzeugung von QR-Code-Bildern bietet.
  - name: og:beschreibung
    content: QRCode ist eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern im PNG- oder SVG-Format bereitstellt. Verwenden Sie die QRCode-Bibliothek, um Ihren Rust-Projekten Funktionen zur Erzeugung von QR-Codes hinzuzufügen.
  - Name: og:image:alt
    Inhalt: QRCode - Eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Erzeugung von QR-Code-Bildern bietet.
  - name: og:locale
    Inhalt: de_DE
---

# QRCode

QRCode ist eine Rust-Bibliothek, die einfach zu bedienende Funktionen zur Verfügung stellt
zur Erzeugung von QR-Code-Bildern im PNG- oder SVG-Format bietet.

## Verwendung

Um die QRCode-Bibliothek zu verwenden, fügen Sie Folgendes zu Ihrer Cargo.toml-Datei hinzu:

  ```toml
[dependencies]
qrcode = "0.8"
```

Als nächstes fügen Sie folgendes zu Ihrem Rust-Code hinzu:

  ```rust
externe Kiste image;
extern crate qrcode;

use image::{ImageBuffer, Rgb, RgbImage};
benutze qrcode::render::svg;
use qrcode::QrCode;
```

Dann kannst du eine neue QRCode-Struktur mit den Daten erstellen, die du
in den QR-Code kodieren willst:

  ```rust
let qr_code = QRCode::new(vec![1, 2, 3]);
```

Du kannst auch eine QRCode-Struktur aus einer Zeichenkette oder einem Vektor von Bytes erzeugen:

  ```rust
let qr_code = QRCode::from_string("Hallo, Welt!".to_string());
let qr_code = QRCode::from_bytes(vec![72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]);
```

Sobald Sie eine `QRCode`-Struktur haben, können Sie die folgenden Methoden verwenden, um
QR-Code-Bilder zu erzeugen:

- `to_qrcode`: erzeugt einen neuen `QrCode` Wert unter Verwendung der Daten, die in
  der `QRCode`-Struktur
- `to_png`: erzeugt ein neues `PNG`-Bild des QR-Codes unter Verwendung der Daten
  die in der `QRCode`-Struktur gespeichert sind
- to_svg": erzeugt ein neues "SVG"-Bild des QR-Codes unter Verwendung der in der
  die in der `QRCode`-Struktur gespeichert sind
- `colorize`: erzeugt ein neues `PNG`-Bild des QR-Codes unter Verwendung der Daten
  QRCode"-Struktur gespeicherten Daten und einem gegebenen Farbwert, um den Code einzufärben.
  QR-Code

## Beispiele

Hier ist ein Beispiel für die Erzeugung eines PNG-Bildes eines QR-Codes:

  ##rust
let qr_code = QRCode::new(vec![1, 2, 3]);
let png_image = qr_code.to_png();

```

Und hier ist ein Beispiel für die Erzeugung eines SVG-Bildes eines QR-Codes:

  ```rust
let qr_code = QRCode::new(vec![1, 2, 3]);
let svg_image = qr_code.to_svg();
```

## Lizenz

QRCode ist lizenziert unter der Apache License, Version 2.0 und der
MIT-Lizenz.

Übersetzt mit www.DeepL.com/Translator (kostenlose Version)
