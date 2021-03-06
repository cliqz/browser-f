# toml-rs

[![Build Status](https://travis-ci.org/alexcrichton/toml-rs.svg?branch=master)](https://travis-ci.org/alexcrichton/toml-rs)
[![Coverage Status](https://coveralls.io/repos/alexcrichton/toml-rs/badge.svg?branch=master&service=github)](https://coveralls.io/github/alexcrichton/toml-rs?branch=master)
[![Latest Version](https://img.shields.io/crates/v/toml.svg)](https://crates.io/crates/toml)
[![Documentation](https://docs.rs/toml/badge.svg)](https://docs.rs/toml)

A [TOML][toml] decoder and encoder for Rust. This library is currently compliant
with the v0.4.0 version of TOML. This library will also likely continue to stay
up to date with the TOML specification as changes happen.

[toml]: https://github.com/toml-lang/toml

```toml
# Cargo.toml
[dependencies]
toml = "0.4"
```

This crate also supports serialization/deserialization through the
[serde](https://serde.rs) crate on crates.io. Currently the older `rustc-serialize`
crate is not supported in the 0.3+ series of the `toml` crate, but 0.2 can be
used for that support.

# License

`toml-rs` is primarily distributed under the terms of both the MIT license and
the Apache License (Version 2.0), with portions covered by various BSD-like
licenses.

See LICENSE-APACHE, and LICENSE-MIT for details.
