/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean | undefined | null | {};
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

// 객체타입
type Dog = {
  name: string;
  color: string;
}
type Person = {
  name: string;
  language: string;
}
type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};
let union2: Union1 = {
  name: "",
  language: "",
}
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
}
// color가 있거나(Dog) language가 있어야 하는데(Person) 없음.
// let union4: Union1 = {
//   name: "", // '{ name: string; }' 형식은 'Union1' 형식에 할당할 수 없습니다. 'language' 속성이 '{ name: string; }'...
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string; // -> variable 변수가 never 타입으로 잡힘
// 객체타입
type Dog2 = {
  name: string;
  color: string;
}
type Person2 = {
  name: string;
  language: string;
}
type Intersection = Dog2 & Person2;
// let intersection1: Intersection = {
//   name: "",
//   color: "",
//   // language: "", // '{ name: string; color: string; }' 형식은 'Intersection' 형식에 할당할 수 없습니다.
// }
