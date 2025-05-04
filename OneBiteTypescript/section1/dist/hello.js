"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
/* tsconfig의 compilerOptions.module에 설정한 모듈시스템으로 변환. ECMAScript Modules 또는 CommonJS */
var hello = function (message) {
    console.log("hello " + message);
};
exports.hello = hello;
/* 블록 범위 변수 'b'를 다시 선언할 수 없음 */
var b = 1;
