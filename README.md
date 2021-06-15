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
(async () => {
    let base64 = await require("@esbiya/base64-wasm")
    const atob = require('atob')
    const originString = atob("m/s+kDHLfcjVY44KyDnhkpFqo5E3xhJzD5yYOdAeAz8ANpK8OxAEoZQFWTYd3JkZhbEDddtDcy0xpPbeYDMDgTOilWpwp9+9fjKPaiOpauC/bXPzcQbflxyyGf0GVFwI2XjXE9D6a838KaCFIrsO/E1MlTv6bKszr0nazX4o7zMhpoazmvcBW6hJBCkv6TfaylQYmgQqU6jQpNTaw4MPuM8OdNDFtHHzTm/mrvRsxzcxD8QpNvlquA9bRRUYKPWugw+05dwmTAWii5afFnPrvg==")
    const encodeString = "M/S~KdhlFCIvy44kYdNHKPfQO5e3XHiZd5YyoDaEaZ8anPk8oXaeOzqfwtyD3iKzHBedDDTdCY0XPpBEydmdGtoJLwPWP9~9FIkpAJoPAUc/BxpZCqBFLXYYgF0gvfWj2xIxe9d6A838kAcfjRSo/e1mLtV6BkSZR0NAZx4O7ZmHPOAZMVCbw6HibcKV6tFAYLqyMGqQu6IqPntAW4mpUm8oDndfThhZtM/MRVrSXZCXd8qPnVLQUa9BrruykpwUGW~05DWMtawJJ5AFfNpRVG=="
    const testMap = "abcdefghjiklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ0123456789~/="

    let cipherText = base64.encode(originString, testMap)
    console.log(cipherText)
    console.log(cipherText == encodeString)

    let plainText = base64.decode(cipherText, testMap)
    console.log(plainText)
    console.log(plainText == originString)
})()
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