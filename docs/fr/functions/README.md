---
description: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
lang: fr-FR
metaTitle: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
permalink: /functions/

meta:
  - name: keywords
    content: date, jour, fonctions, heure, iso_8601, bibliothèque, microseconde, milliseconde, mini-fonctions, minute, mois, nanoseconde, now_utc, rouille, seconde, heure, timestamp, utc, jour de la semaine, année
  - name: twitter:card
    content: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
  - name: twitter:description
    content: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
  - name: twitter:title
    content: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
  - name: og:title
    content: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
  - name: og:description
    content: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
  - name: og:image:alt
    content: Bibliothèque de fonctions - Une collection de fonctions utiles pour travailler avec divers aspects d'un programme Rust.
  - name: og:locale
    content: fr_FR
---

# Bibliothèque de fonctions pour Rust 🦀

`Mini Functions` est une bibliothèque de fonctions pour le langage de
programmation Rust qui fournit une collection d'outils pour travailler
avec divers aspects d'une application Rust.

 Elle comprend une gamme de fonctions qui peuvent être utilisées pour
 effectuer une variété de tâches, telles que la récupération et la
 manipulation d'informations sur la date et l'heure actuelles, le
 travail avec des chaînes de caractères et du texte, et la manipulation
 de structures de données.

 Les fonctions de `Mini Functions` sont optimisées pour la vitesse et
 l'efficacité, ce qui les rend utiles pour une variété d'applications,
 y compris celles qui nécessitent des performances rapides ou qui
 doivent manipuler de grandes quantités de données.

## Fonctions de la date et de l'heure

Dans cette section, vous trouverez des informations sur les fonctions de
date et d'heure prises en charge par la bibliothèque `mini-fonctions`.

Les fonctions de date et d'heure sont utilisées pour récupérer et
manipuler des informations sur la date et l'heure actuelles. Elles
peuvent être utilisées pour obtenir diverses parties de la date, comme
le jour, le mois et l'année, ainsi que diverses parties de l'heure,
comme l'heure, la minute et la seconde.

Ces fonctions peuvent également être utilisées pour obtenir la date et
l'heure actuelles dans différents formats, tels que l'horodatage ou le
format ISO 8601.

Elles sont actuellement répertoriées par ordre alphabétique dans le
tableau suivant :

### Tableau 1 - Fonctions de la date (date.rs)

| Fonction | Description |
| -------- | ----------- |
| `date` | Renvoie la date du jour au format UTC. (`YYYY-MM-DD`) |
| `day` | Renvoie le jour actuel. (`1-31`) |
| `hour` | Renvoie l'heure actuelle. (`0-23`) |
| `iso_8601` | Renvoie la date et l'heure actuelles au format ISO 8601. (`AAAA-MM-DDTHH:mm:ss.SSS±HHMM`) |
| `microsecond` | Renvoie la microseconde actuelle. (`0-999999`) |
| `millisecond` | Renvoie la milliseconde actuelle. (`0-999`) |
| `minute` | Renvoie la minute actuelle (0-59).
| `month` | Renvoie le mois en cours. (`Janvier-Décembre`) |
| `nanosecond` | Renvoie la nanoseconde actuelle. (`0-999999999`) |
| `now_utc` | Renvoie la date et l'heure actuelles au format UTC. (`YYYY-MM-DDTHH:mm:ss.SSS±HH:MM:SS`) | |
| `second` | Renvoie la seconde actuelle. (`0-59`) |
| `timestamp` | Renvoie l'horodatage actuel en temps Unix en millisecondes. (`1610000000000`) |
| `weekday` | Renvoie le jour de la semaine actuel (`Dimanche-Samedi`).
| `year` | Renvoie l'année en cours. (`YYYY`) |

Les fonctions ci-dessus permettent de récupérer des informations sur la
date et l'heure actuelles.

Les fonctions `date` et `now_utc` retournent toutes deux la date du jour
, `now_utc` retournant également l'heure du jour en plus de la date.

Les fonctions `day`, `hour`, `minute`, `month`, `second`, et `year`
renvoient toutes les parties respectives de la date courante.

La fonction `weekday` renvoie le jour de la semaine en cours, le
dimanche étant représenté par 0 et le samedi par 6.

La fonction `timestamp` renvoie l'horodatage actuel, qui est une
représentation numérique de la date et de l'heure actuelles. Les
fonctions `microseconde`, `milliseconde` et `nanoseconde` renvoient les
parties respectives du temps actuel.

La fonction `iso_8601` renvoie la date et l'heure actuelles au format
ISO 8601, qui est une représentation normalisée des dates et des heures.

Globalement, ces fonctions peuvent être utiles pour récupérer et
manipuler des informations sur la date et l'heure actuelles dans un
programme.

## Fonctions de log

Dans cette section, vous trouverez des informations sur les fonctions
Log que la bibliothèque `mini-functions` supporte.

Les fonctions Log sont utilisées pour enregistrer un message sur la
console, ce qui peut être utile pour déboguer un programme.

La fonction Log est actuellement répertoriée dans le tableau suivant :

### Tableau 2 - Fonction logarithmique (log.rs)

| Fonction | Description |
| -------- | ----------- |
| `new` | Crée une nouvelle instance de log. |
| `log` | Enregistre un message sur la console. |

La fonction `new` crée une nouvelle instance de journal, qui peut être
utilisée pour enregistrer des messages dans la console. La fonction
`log` enregistre un message sur la console en utilisant l'instance de
journal.

Globalement, ces fonctions peuvent être utiles pour enregistrer des
messages sur la console, ce qui peut être utile pour déboguer un
programme.
