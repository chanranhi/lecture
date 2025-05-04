/* tsconfig의 compilerOptions.module에 설정한 모듈시스템으로 변환. ECMAScript Modules 또는 CommonJS */
export const hello = (message: string) => {
    console.log("hello " + message);
}

/* 블록 범위 변수 'b'를 다시 선언할 수 없음 */
const b = 1;