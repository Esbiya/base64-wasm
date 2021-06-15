#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <emscripten.h>

 #define bool int
 #define true 1
 #define false 0

// char table[65] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
char padding_char = '=';

EMSCRIPTEN_KEEPALIVE
void* null_ptr() {
    char ptr[64] = {0};
    return (void*)*(char **)ptr;
}

int findchr(char *array, char ch) {
    for (int i = 0; i < strlen(array); i++) {
        if (array[i] == ch) {
            return i;
        }
    }
    return 0;
}

EMSCRIPTEN_KEEPALIVE
void b64_encode(char *src, char *result, char* table) {
    if (table == NULL) {
        table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    }
    int fill_bit = 0;
    int data_length;
    int result_length;
    int index;
    bool full = true;
    data_length = strlen(src);
    fill_bit = ((3 - strlen(src) % 3) % 3);
    for (int k = 0; k < fill_bit; k++) {
        src[data_length + k] = '\0';
    }
    int j = 0;
    for (int i = 0; i < data_length; i += 3) {
        index = src[i] >> 2;
        result[j++] = table[index];
        index = ((src[i] & 3) << 4) + (src[i + 1] >> 4);
        result[j++] = table[index];
        index = ((src[i + 1] & 15) << 2) + (src[i + 2] >> 6);
        result[j++] = table[index];
        index = (src[i + 2] & 63);
        result[j++] = table[index];
    }
    result_length = strlen(result);
    for (int k = 0; k < fill_bit; k++) {
        result[result_length - 1 - k] = padding_char;
    }
}

EMSCRIPTEN_KEEPALIVE
void b64_decode(char *src, char *result, char* table) {
    if (table == NULL) {
        table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    }
    int base_len;
    int j = 0;
    base_len = strlen(src);
    for (int i = 0; i < base_len; i++) {
        if (src[i] == padding_char)
            src[i] = 'A';
    }
    for (int i = 0; i < base_len; i += 4) {
        result[j++] = (findchr(table, src[i]) << 2) + (findchr(table, src[i + 1]) >> 4);
        result[j++] = (findchr(table, src[i + 1]) << 4) + (findchr(table, src[i + 2]) >> 2);
        result[j++] = ((findchr(table, src[i + 2]) & 3) << 6) + (findchr(table, src[i + 3]));
    }
}
