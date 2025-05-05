// any 타입
// 특정 변수의 타입을 우리가 확실히 모를 때
// 타입 검사를 미리 안하기 때문에 소스단에서 오류 발생하지 않고 런타임에 오류가 발생
let anyVar: any = 10;
/*
// 모든 타입 할당 가능
anyVar = "hello world";

anyVar = true;
anyVar = {};
anyVar = () => {};

// 특정 타입 메소드도 사용 가능
anyVar.toUpperCase();
anyVar.toFixed();
 */
// 다른 타입 변수에 할당도 가능
let num: number = 0;
num = anyVar;

// unknown 타입
// any 타입보다는 조금 더 안정적
let unknownVar: unknown;
// 모든 타입 할당 가능
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 특정 타입 메소드 사용 불가능
// unknownVar.toUpperCase(); // unknown 형식에 'toUpperCase' 속성이 없습니다.

// 다른 타입 변수에 할당 불가능
// num = unknownVar; // unknown 형식은 number 형식에 할당할 수 없습니다.

// 활용하려면 typeof 연산자로 타입을 확실히 밝혀주었을 때 가능
// => 타입 정제할 때 가능
if (typeof unknownVar === "number") {
    num = unknownVar;
}