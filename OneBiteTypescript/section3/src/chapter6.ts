/**
 * 타입 단언 (type assertions)
 * https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#%ED%83%80%EC%9E%85-%EB%8B%A8%EC%96%B8
 */

type Person = {
  name: string;
  age: number;
}

// let person: Person = {}; // 오류. '{}' 형식에 'Person' 형식의 name, age 속성이 없습니다.
// person.name = "John";
// person.age = 30;

// 나중에 초기화 하고 싶은데 오류가 나서 Person type 선언을 안해봄. -> 빈 객체로 타입 추론 됨
// let person = {};
// person.name = "John"; // 오류. '{}' 형식에 'name' 속성이 없습니다.
// person.age = 30; // 오류. '{}' 형식에 'age' 속성이 없습니다.

// 타입을 단언(type a)하면 문제 해결
let person = {} as Person; // {}을 Person 타입으로 간주하라고 타입스크립트 컴파일러에게 알려줌
person.name = "John";
person.age = 30;

type Dog = {
  name: string;
  color: string;
}
// let dog: Dog = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도", // 오류. '{ name: string; color: string; breed: string; }' 형식은 'Dog' 형식에 할당할 수 없습니다.
// }
let dog: Dog = { // 타입을 단언했기때문에 Dog타입 선언 생략 가능
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // 타입 단언하면 타입에서 정의되지 않은 속성이 있을때에도 타입오류나지않음.

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // number는 never의 슈퍼타입
let num2 = 10 as unknown; // number는 unknown의 서브타입
let num3 = 10 as string; // 오류 'number' 형식을 'string' 형식으로 변환한 작업은 실수일 수 있습니다.
// 두 형식이 서로 충분히 겹치치 않기 때문입니다.(number와 string은 서로소)
// 의도적으로 변환한 경우에는 먼저 'unknown' 으로 식을 변환합니다. => 10 as unknown as string; 과 같이 변환할 수는 있음. 비추

/**
 * const 단언
 */

let num4 = 10 as const; // const로 선언한 것과 동일한 효과

// 객체타입에서 활용하기 좋음
// let cat = { // 타입이 name, color 속성을 가진 객체 타입으로 추론됨
//   name: "John",
//   color: "yellow",
// }
let cat = { // 객체의 모든 속성이 readonly 읽기전용 속성이 됨
  name: "John",
  color: "yellow",
} as const;

// cat.name = "John2"; // 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

/**
 * Non Null 단언
 * 어떤 값이 null이나 undefined가 아니라고 타입스크립트 컴파일러에게 알려줌
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "Text1",
  author: "John",
};

// const len: number = post.author?.length; // 옵셔널체이닝이 자동으로 추가됨 -> undefined나 number 값이 리턴됨
// 오류. 'number | undefined' 형식은 'number' 형식에 할당할 수 없습니다.

// Non Null 단언해주면 됨 (느낌표!)
const len: number = post.author!.length // 값이 null이거나 undefined가 아닐거라고 컴파일러에게 알려줌

// 타입 단언은 실제 필요한 속성이 없어도 오류를 내지 않으므로 조심히 사용하자!
