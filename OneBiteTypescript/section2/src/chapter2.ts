// 배열
let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3]; // 제네릭 문법

let strArr1: string[] = ["hello", "im", "chanranhi"];
let strArr2: Array<string> = ["hello", "im", "chanranhi"];

let boolArr1: boolean[] = [true, false, true];
let boolArr2: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
/* Array Method를 사용할때는 Array로 인식하여 튜플 길이/타입 오류가 체크되지 않음 */

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["name", 1],
    ["email", 2],
    ["phone", 3],
    ["birthday", 4],
    // [5, "gender"] 오류
]

