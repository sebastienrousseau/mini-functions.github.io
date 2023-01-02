---
description: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
lang: de-DE
metaTitle: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
permalink: /functions/

meta:
  - name: keywords
    content: datum, tag, funktionen, stunde, iso_8601, bibliothek, mikrosekunde, millisekunde, minifunktionen, minute, monat, nanosekunde, now_utc, rust, sekunde, zeit, zeitstempel, utc, wochentag, jahr
  - name: twitter:card
    content: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
  - name: twitter:description
    content: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
  - name: twitter:title
    content: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
  - name: og:title
    content: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
  - name: og:description
    content: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
  - name: og:image:alt
    content: Funktionsbibliothek - Eine Sammlung von nützlichen Funktionen für die Arbeit mit verschiedenen Aspekten eines Rust-Programms
  - name: og:locale
    content: de_DE
---

# Funktionsbibliothek für Rust 🦀

 `Mini Functions` ist eine Bibliothek von Funktionen für die
 Programmiersprache Rust, die eine Sammlung von Werkzeugen für die
 Arbeit mit verschiedenen Aspekten einer Rust-Anwendung bietet.

 Es enthält eine Reihe von Funktionen, die für eine Vielzahl von
 Aufgaben verwendet werden können, wie z. B. das Abrufen und Bearbeiten
 von Informationen über das aktuelle Datum und die Uhrzeit, die Arbeit
 mit Zeichenketten und Text und die Handhabung von Datenstrukturen.

 Die Funktionen in `Mini Functions` sind auf Geschwindigkeit und
 Effizienz optimiert und eignen sich daher für eine Vielzahl von
 Anwendungen, einschließlich solcher, die eine schnelle Leistung
 erfordern oder große Datenmengen verarbeiten müssen.

## Funktionen für Datum und Uhrzeit

In diesem Abschnitt finden Sie Informationen über die Datums- und
Zeitfunktionen, die die Bibliothek `mini-functions` unterstützt.

Die Funktionen Datum und Uhrzeit dienen zum Abrufen und Bearbeiten von
Informationen über das aktuelle Datum und die Uhrzeit. Sie können
verwendet werden, um verschiedene Teile des Datums, wie z. B. den Tag,
den Monat und das Jahr, sowie verschiedene Teile der Zeit, wie z. B.
die Stunde, die Minute und die Sekunde, abzurufen.

Diese Funktionen können auch verwendet werden, um das aktuelle Datum und
die Uhrzeit in verschiedenen Formaten zu erhalten, z. B. als Zeitstempel
oder im ISO 8601-Format.

Diese sind derzeit in alphabetischer Reihenfolge in der folgenden
Tabelle aufgeführt:

### Tabelle 1 - Datumsfunktionen (date.rs)

| Funktion | Beschreibung |
| -------- | ----------- |
| `date` | Returns the current date in UTC format. (`YYYY-MM-DD`) |
| `day` | Gibt den aktuellen Tag zurück. (`1-31`) |
| `hour` | Gibt die aktuelle Stunde zurück. (`0-23`) |
| `iso_8601` | Gibt das aktuelle Datum und die Uhrzeit im ISO 8601-Format zurück. (`JJJJ-MM-TTTHH:mm:ss.SSS±HHMM`) |
| `microsecond` | Gibt die aktuelle Mikrosekunde zurück. (`0-999999`) |
| `millisecond` | Gibt die aktuelle Millisekunde zurück. (`0-999`) |
| `minute` | Gibt die aktuelle Minute zurück (`0-59`) |
| `month` | Gibt den aktuellen Monat zurück. (`Januar-Dezember`) |
| `nanosecond` | Gibt die aktuelle Nanosekunde zurück. (`0-999999999`) |
| `now_utc` | Gibt das aktuelle Datum und die Uhrzeit im UTC-Format zurück. (`JJJJ-MM-TTTHH:mm:ss.SSS±HH:MM:SS`) |
| `second` | Gibt die aktuelle Sekunde zurück. (`0-59`) |
| `timestamp` | Gibt den aktuellen Zeitstempel in Unix-Zeit in Millisekunden zurück. (`1610000000000`) |
| `weekday` | Gibt den aktuellen Wochentag zurück (`Sonntag-Samstag`) |
| `year` | Gibt das aktuelle Jahr zurück. (`JJJJ`) |

Die obigen Funktionen beziehen sich auf die Abfrage von Informationen
über das aktuelles Datum und Uhrzeit.

Die Funktionen `date` und `now_utc` geben beide das aktuelle Datum
zurück, wobei `now_utc` gibt zusätzlich zum Datum auch die aktuelle
Zeit zurück.

Die Funktionen `day`, `hour`, `minute`, `month`, `second` und `year`
geben alle geben die entsprechenden Teile des aktuellen Datums zurück.

Die Funktion "Wochentag" gibt den aktuellen Wochentag zurück, wobei
Sonntag als 0 und Samstag als 6 dargestellt wird.

Die Funktion `Timestamp` gibt den aktuellen Zeitstempel zurück, der eine
numerische Darstellung des aktuellen Datums und der Uhrzeit. Die
Funktionen `Mikrosekunde`, `Millisekunde` und `Nanosekunde` geben
entsprechende Teile der der aktuellen Zeit zurück.

Die Funktion "iso_8601" gibt das aktuelle Datum und die Uhrzeit im
ISO 8601-Format zurück, das eine standardisierte Darstellung von Datum
und Zeiten ist.

Insgesamt können diese Funktionen nützlich sein für das Abrufen und
Bearbeiten von Informationen über das aktuelle Datum und die Uhrzeit in
einem Programm.

## Funktionen für log

In diesem Abschnitt finden Sie Informationen über die Log-Funktionen,
die von der `mini-functions`-Bibliothek unterstützt werden.

Die Log-Funktionen werden verwendet, um eine Nachricht auf der Konsole
zu protokollieren, was bei der Fehlersuche in einem Programm nützlich
sein kann.

Die Protokollfunktion ist derzeit in der folgenden Tabelle aufgeführt:

### Tabelle 2 - Log-Funktion (log.rs)

| Funktion | Beschreibung |
| -------- | ----------- |
| `new` | Erzeugt eine neue Protokollinstanz. |
| `log` | Protokolliert eine Meldung auf der Konsole. |

Die Funktion `new` erzeugt eine neue Log-Instanz, die dazu verwendet
werden kann, Meldungen auf der Konsole zu protokollieren. Die Funktion
`log` protokolliert eine Nachricht auf der Konsole unter Verwendung der
log-Instanz.

Insgesamt können diese Funktionen nützlich sein, um Nachrichten auf der
Konsole zu protokollieren, was bei der Fehlersuche in einem Programm
hilfreich sein kann.

## UUID-Funktionen

In diesem Abschnitt finden Sie Informationen über die UUID-Funktionen,
die von der `mini-functions`-Bibliothek unterstützt werden.

Die UUID-Funktionen werden verwendet, um eine UUID zu erzeugen, d.h.
einen eindeutigen Bezeichner, der zur Identifizierung eines bestimmten
Objekts verwendet werden kann.

Die UUID-Funktionen sind derzeit in der folgenden Tabelle aufgeführt:

### Tabelle 3 - UUID-Funktionen (uuid.rs)

| Funktion | Beschreibung |
| -------- | ----------- |
| `new` | Erzeugt eine neue UUID-Instanz. |
| `uuid_v3` | Erzeugt eine UUID v3. |
| `uuid_v4` | Erzeugt eine UUID v4. |
| `uuid_v5` | Erzeugt eine UUID v5. |

Die Funktion `new` erzeugt eine neue UUID-Instanz, die zur Erzeugung von
UUIDs verwendet werden kann. Die Funktionen `uuid_v3`, `uuid_v4` und
`uuid_v5` erzeugen eine UUID unter Verwendung einer bestimmten Version
des UUID-Standards.

Insgesamt können diese Funktionen nützlich sein, um UUIDs zu erzeugen,
die zur Identifizierung eines bestimmten Objekts nützlich sein können.
Die Funktionen `uuid_v3` und `uuid_v5` können nützlich sein, um UUIDs
zu erzeugen, die auf einem Namen basieren, während die Funktion
`uuid_v4` nützlich sein kann, um UUIDs zu erzeugen, die zufällig sind.
