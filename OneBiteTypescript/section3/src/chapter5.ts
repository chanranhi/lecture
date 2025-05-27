/**
 * 타입 추론
 * https://www.typescriptlang.org/ko/docs/handbook/type-inference.html
 */

let a = 10; // 점진적 타입시스템. 타입을 정의하거나 값을 할당하면 타입을 추론함.

// function func(param) {} // 'param' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
// 매개변수는 추론이 안됨
// 추론할 정보(할당한 값)이 있으면 그에 따라 타입 추론
let b = "hello";
let c = {
  id: 1,
  name: "John",
  profile: {
    nickname: "chanranhi"
  },
}

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 함수는 반환값 기준으로 타입을 추론함
function func(message = "hello") { // 매개변수에 기본값이 할당되어있으면 타입을 추론함
  return "hello";
}

/** any 타입의 진화 **/
// let d; 와 같이 타입을 추론할 정보가 없어 [암묵적으로] any타입으로 추론하는 경우 any타입의 진화가 가능함.
// 비추

let d; // 'any' 타입으로 추론
d = 10; // 값을 할당하면 그 값 기준으로 타입 추론 (number)
d.toFixed(); // number 타입의 메소드 사용 가능

d = "hello"; // 값을 다시 할당하면 이 줄에서 다시 string으로 추론
d.toUpperCase();
// d.toFixed(); // 오류. 'toFixed' 속성이 'string' 형식에 없습니다.

// [명시적으로] any타입을 선언하는 경우는 진화가 없음
let e: any;
e = 10;
e.toFixed();

e = "hello";
e.toUpperCase();
e.toFixed(); // 오류 발생하지 않음

const num = 10; // number literal 타입으로 추론 됨. const는 값이 바뀌지 않기 때문
const str = "hello"; // string literal 타입으로 추론
let num2 = 10; // number로 범용적으로 타입 추론. => "타입 넓히기" 라고 부름

let arr = [1, "string"]; // 배열 초기값들을 다 비교해서 최적의 공통 타입으로 추론