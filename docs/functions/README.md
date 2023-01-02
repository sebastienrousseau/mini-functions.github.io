---
description: Functions library — A collection of useful functions for working with various aspects of a Rust program
lang: en-GB
metaTitle: Functions library — A collection of useful functions for working with various aspects of a Rust program
permalink: /functions/

meta:
  - name: keywords
    content: date, day, functions, hour, iso_8601, library, microsecond, millisecond, mini-functions, minute, month, nanosecond, now_utc, rust, second, time, timestamp, utc, weekday, year
  - name: twitter:card
    content: Functions library — A collection of useful functions for working with various aspects of a Rust program
  - name: twitter:description
    content: Functions library — A collection of useful functions for working with various aspects of a Rust program
  - name: twitter:title
    content: Functions library — A collection of useful functions for working with various aspects of a Rust program
  - name: og:title
    content: Functions library — A collection of useful functions for working with various aspects of a Rust program
  - name: og:description
    content: Functions library — A collection of useful functions for working with various aspects of a Rust program
  - name: og:image:alt
    content: Functions library — A collection of useful functions for working with various aspects of a Rust program
  - name: og:locale
    content: en_GB
---

# Functions library for Rust 🦀

 `Mini Functions` is a library of functions for the programming language
 Rust that provides a collection of tools for working with various
 aspects of a Rust application.

 It includes a range of functions that can be used to perform a variety
 of tasks, such as retrieving and manipulating information about the
 current date and time, working with strings and text, and handling data
 structures.

 The functions in `Mini Functions` are optimized for speed and
 efficiency, making them useful for a variety of applications, including
 those that require fast performance or that need to handle large
 amounts of data.

## Date and time functions

In this section, you can find information about the date and time
functions that the `mini-functions` library supports.

The Date and time functions are used to retrieve and manipulate
information about the current date and time. They can be used to get
 various parts of the date, such as the day, month, and year, as well as
various parts of the time, such as the hour, minute, and second.

These functions can also be used to get the current date and time in
different formats, such as a timestamp or the ISO 8601 format.

These are currently listed in alphabetical order in the following table:

### Table 1 - Date Functions (date.rs)

| Function | Description |
| -------- | ----------- |
| `date` | Returns the current date in UTC format. (`YYYY-MM-DD`) |
| `day` | Returns the current day. (`1-31`) |
| `hour` | Returns the current hour. (`0-23`) |
| `iso_8601` | Returns the current date and time in ISO 8601 format. (`YYYY-MM-DDTHH:mm:ss.SSS±HHMM`) |
| `microsecond` | Returns the current microsecond. (`0-999999`) |
| `millisecond` | Returns the current millisecond. (`0-999`) |
| `minute` | Returns the current minute. (`0-59`) |
| `month` | Returns the current month. (`January-December`) |
| `nanosecond` | Returns the current nanosecond. (`0-999999999`) |
| `now_utc` | Returns the current date and time in UTC format. (`YYYY-MM-DDTHH:mm:ss.SSS±HH:MM:SS`) |
| `second` | Returns the current second. (`0-59`) |
| `timestamp` | Returns the current timestamp in Unix time in milliseconds. (`1610000000000`) |
| `weekday` | Returns the current weekday. (`Sunday-Saturday`) |
| `year` | Returns the current year. (`YYYY`) |

The above functions are related to retrieving information about the
current date and time.

The `date` and `now_utc` functions both return the current date, with
`now_utc` also returning the current time in addition to the date.

The `day`, `hour`, `minute`, `month`, `second`, and `year` functions all
return respective parts of the current date.

The `weekday` function returns the current day of the week, with Sunday
being represented as 0 and Saturday as 6.

The `timestamp` function returns the current timestamp, which is a
numerical representation of the current date and time. The `microsecond`
, `millisecond`, and `nanosecond` functions return respective parts of
the current time.

The `iso_8601` function returns the current date and time in the
ISO 8601 format, which is a standardized representation of dates and
times.

Overall, these functions can be useful for retrieving and manipulating
information about the current date and time in a program.

## Log functions

In this section, you can find information about the Log functions that
the `mini-functions` library supports.

The Log functions are used to log a message to the console, which can be
useful for debugging a program.

The Log function is currently listed in the following table:

### Table 2 - Log Function (log.rs)

| Function | Description |
| -------- | ----------- |
| `new` | Creates a new log instance. |
| `log` | Logs a message to the console. |

The `new` function creates a new log instance, which can be used to log
messages to the console. The `log` function logs a message to the
console using the log instance.

Overall, these functions can be useful for logging messages to the
console, which can be useful for debugging a program.

## UUID functions

In this section, you can find information about the UUID functions that
the `mini-functions` library supports.

The UUID functions are used to generate a UUID, which is a unique
identifier that can be used to identify a specific object.

The UUID functions are currently listed in the following table:

### Table 3 - UUID Functions (uuid.rs)

| Function | Description |
| -------- | ----------- |
| `new` | Creates a new UUID instance. |
| `uuid_v3` | Generates a UUID v3. |
| `uuid_v4` | Generates a UUID v4. |
| `uuid_v5` | Generates a UUID v5. |

The `new` function creates a new UUID instance, which can be used to
generate UUIDs. The `uuid_v3`, `uuid_v4`, and `uuid_v5` functions
generate a UUID using a specific version of the UUID standard.

Overall, these functions can be useful for generating UUIDs, which can
be useful for identifying a specific object. The `uuid_v3` and `uuid_v5`
functions can be useful for generating UUIDs that are based on a name,
while the `uuid_v4` function can be useful for generating UUIDs that are
random.
