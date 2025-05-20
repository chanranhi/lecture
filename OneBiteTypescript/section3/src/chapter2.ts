/**
 * 타입 호환성(Type Compatibility)
 * 타입 호환표 - https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
 */

/**
 * Unknown 타입 => 전체집합 의미
 * 모든 타입의 슈퍼 타입
 */
function unknownTest() {
  // upCasting 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // downCasting 불가
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입 => 공집합 의미
 * 모든 타입의 서브 타입
 */
function neverTest() {
  function neverFunc(): never {
    // 반환할 수 있는 값의 종류가 아무것도 없음
    while (true) {}
  }
  // upCasting 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // downCasting 불가
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = false;
}

/**
 * Void 타입 => 반환이 없는 함수
 * undefined의 슈퍼 타입
 */

function voidTest() {
  function voidFunc(): void {
    console.log("hello world");
    return undefined; // void는 undefined의 슈퍼타입
  }

  let voidVar: void = undefined;
}

/**
 * any 타입 => 타입계층도 무시
 * never 제외 모든 타입의 슈퍼/서브 타입
 */

function anyTest() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // downCasting을 할당하는 것 가능
  anyVar = unknownVar;

  // 자기가 downCasting 하는것도 가능
  undefinedVar = anyVar;

  // never 타입까지는 downCasting 불가
  // neverVar = anyVar;
}
