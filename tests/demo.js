const {
    base64
} = require("../index")

for (; base64.loadFinished == false; ) {
    console.log(base64.loadFinished)
    setTimeout(() => {
        console.log(base64.loadFinished)
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
    }, 1)
}
