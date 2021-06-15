<h1 align="center">Welcome to base64-wasm 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/base64-wasm" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/base64-wasm.svg">
  </a>
  <a href="https://github.com/Esbiya/base64-wasm#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Esbiya/base64-wasm/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Esbiya/base64-wasm/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Esbiya/base64-wasm" />
  </a>
</p>

> a base64 lib for customize table

### 🏠 [Homepage](https://github.com/Esbiya/base64-wasm#readme)

## Usage

```
const { base64, encode, decode } = require("../index")

base64.onRuntimeInitialized = function () {
    const originString = "111"
    const testMap = "abcdefghjiklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ0123456789~/="

    let cipherText = encode(originString, testMap)
    console.log(cipherText)
    console.log(cipherText == encodeString)

    let plainText = decode(cipherText, testMap)
    console.log(plainText)
    console.log(plainText == originString)
}
```

## Author

👤 **esbiya**

* Github: [@Esbiya](https://github.com/Esbiya)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Esbiya/base64-wasm/issues). You can also take a look at the [contributing guide](https://github.com/Esbiya/base64-wasm/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [esbiya](https://github.com/Esbiya).<br />
This project is [MIT](https://github.com/Esbiya/base64-wasm/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_