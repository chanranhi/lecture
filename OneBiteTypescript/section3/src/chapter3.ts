/**
 * [이전 시간!]
 * 기본 타입간의 호환성
 * : 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단
 */

let num1: number = 10;
let num2: 10 = 10;

// number literal(num2)타입을 number 타입(num1)에 할당하는건 호환됨
// number 타입이 number literal의 슈퍼 타입
num1 = num2;

/**
 * 객체 타입간의 호환성
 * : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * 타입스크립트는 구조적 타입시스템을 따름 (property로 타입시스템 정의)
 *
 */

type Animal = { // 슈퍼
  name: string;
  color: string;
};

type Dog = { // 서브
  name: string;
  color: string;
  breed: string; // Animal + breed
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
}

animal = dog;

// Animal 타입이 Dog 타입의 슈퍼 타입 => Dog타입이 Animal에 속함
// dog = animal; // 'breed' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다

type Book = { // ProgrammingBook의 슈퍼타입
  name: string;
  price: number;
}

type ProgrammingBook = { /// Book의 서브타입
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs"
}

book = programmingBook;
// programmingBook = book; // 'skill' 속성이 'Book' 형식에 없지만 'ProgrammingBook' 형식에서 필수입니다.

/**
 * 초과 프로퍼티 검사
 * : 변수를 초기화 할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사.
 * : 객체 리터럴이 아닌 서브타입을 할당하는건 허용됨
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs" // '{ name: string; price: number; skill: string; }' 형식은 'Book' 형식에 할당할 수 없습니다.
}
// 객체 리터럴X, 서브타입 할당
let book3: Book = programmingBook;

function func(book: Book) {}
func({
 name: "한 입 크기로 잘라먹는 리액트",
 price: 33000,
 // skill: "reactjs", // 인수로 객체 리터럴을 전달할 때도 초과 프로퍼티 검사 진행
});
func(programmingBook); // 변수로 저장해두었다가 인수로 전달해야 함