"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 타입스크립트를 컴파일 하면 타입선언을 생략하고 tsconfig의 compilerOptions.target에 설정한 ES버전 자바스크립트 소스로 변환 */
/* var a = 1; */
/* var func = function () { console.log("Hello TypeScript"); }; -> ES5로 설정 시 함수 표현식으로 바뀜 */
var a = 1;
var func = function () { console.log("Hello TypeScript"); };
/* tsconfig의 compilerOptions.module에 설정한 esModule 또는 commonJS 방식으로 변환됨 (지원되는 환경에 따라 선택) */
var hello_1 = require("./hello");
(0, hello_1.hello)('chanranhi');
/* 블록 범위 변수 'b'를 다시 선언할 수 없음 */
/* 타입스크립트는 모든 ts파일을 전역모듈로 보기 때문 */
/* (1)export나 import같은 모듈 시스템의 문법을 한번이라도 사용하면 독립된 모듈로 인식함 */
/* (2)tsconfig의 compilerOptions.moduleDetection을 force로 설정하면 ts 컴파일 시 export를 자동으로 추가함 */
var b = 1;
