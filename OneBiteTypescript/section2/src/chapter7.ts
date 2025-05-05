// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

// 함수의 반환값도 타입 정의 가능
function func1(): string {
    return "hello world";
}
// 함수의 반환값이 없을 때 void 사용
function func2(): void {
    console.log("Hello World!");
}

// 변수에서도 사용은 가능하고 undefined만 할당 가능
let a: void;
// a = 1; // 'number' 형식은 'void'형식에 할당할 수 없습니다.
// a = "hello"; // 'string' 형식은 'void' 형식에 할당할 수 없습니다.
// a = {}; // '{}' 형식은 'void' 형식에 할당 할 수 없습니다.
a = undefined;
// 예외적으로 tsconfig의 compileOptions.strictNullChecks 옵션을 끌 경우 null도 할당 가능
a = null;

// function의 반환값으로 undefined 타입을 정의할 경우
// return undefined 해줘야 하기 때문에 반환값없이 void로 사용
function func22(): undefined {
    console.log("Hello World!");
    return; // undefined 반환
}

// never
// never -> 존재하지 않는
// 불가능한 타입

// 반복문이 끝나지 않아 반환을 할 수가 없음
// 정상적인 종료를 할 수 없어 반환값이 있는게 모순임
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

// 변수의 타입으로 지정하면 어떠한 값도 할당할 수 없음
let b: never;
// b = 1; // 'number' 형식은 'never' 형식에 할당할 수 없습니다.
// b = {}; // '{}' 형식은 'never' 형식에 할당할 수 없습니다.
// b = ""; // 'string' 형식은 'never' 형식에 할당할 수 없습니다.
// b = undefined; // 'undefined' 형식은 'never' 형식에 할당할 수 없습니다.
// b = null; // 'null' 형식은 'never' 형식에 할당할 수 없습니다.
let anyVar: any;
// b = anyVar; // 'any' 형식은 'never' 형식에 할당할 수 없습니다.
