const Module = require('./build/base64.js');

Module.onRuntimeInitialized = function () {
    const mallocByteBuffer = len => {
        const ptr = Module._malloc(len)
        const heapBytes = new Uint8Array(Module.HEAPU8.buffer, ptr, len)
        return heapBytes
    }

    const Uint8ArrayToString = (arr, len) => {
        return len ?
            Array.from(arr).slice(0, len).map(v => String.fromCharCode(v)).join('') :
            Array.from(arr).map(v => String.fromCharCode(v)).join('')
    }

    const stringToUint8Array = str => {
        var arr = [];
        for (var i = 0, j = str.length; i < j; ++i) {
            arr.push(str.charCodeAt(i));
        }

        var tmpUint8Array = new Uint8Array(arr);
        return tmpUint8Array
    }

    const allocateUtf8String = str => {
        let s1 = stringToUint8Array(str)
        let b1 = mallocByteBuffer(s1.byteLength)
        b1.set(s1)
        return b1
    }

    Module.encode = function (originString, _base64Map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/") {
        const originLength = originString.length
        const resultLength = originLength % 3 === 0 ? (originLength / 3) * 4 : parseInt(originLength / 3 + 1) * 4
        const plainText = allocateUtf8String(originString)
        const base64Map = allocateUtf8String(_base64Map)
        const encodeResult = mallocByteBuffer(resultLength)

        let encodeLength = Module._b64_encode(
            plainText.byteOffset, originLength, base64Map.byteOffset, base64Map.byteLength, encodeResult.byteOffset
        )
        let encodeString = Uint8ArrayToString(encodeResult, encodeLength)

        Module._free(plainText)
        Module._free(base64Map)
        Module._free(encodeResult)

        return encodeString
    }

    Module.decode = function (encodeString, _base64Map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/") {
        const originLength = encodeString.length
        const resultLength = (originLength / 4) * 3
        const cipherText = allocateUtf8String(encodeString)
        const base64Map = allocateUtf8String(_base64Map)
        const decodeResult = mallocByteBuffer(resultLength)

        let decodeLength = Module._b64_decode(
            cipherText.byteOffset, originLength, base64Map.byteOffset, base64Map.byteLength, decodeResult.byteOffset
        )
        let decodeString = Uint8ArrayToString(decodeResult, decodeLength)

        Module._free(cipherText)
        Module._free(base64Map)
        Module._free(decodeResult)

        return decodeString
    }
}

module.exports = new Promise(e => {
    Module.postRun = t => {
        return e(Module)
    }
})
