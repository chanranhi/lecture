// Primitive Type

// number
// : number -> 타입 주석/타입 어노테이션 이라 부름
let num1: number = 123;
let num2: number = 123;
let num3: number = -123;
let num4: number = 0.123;
let num5: number = -0.123;
let num6: number = Infinity;
let num7: number = -Infinity;
let num8: number = NaN;

// string
let str1: string = "hello world";
let str2: string = 'hello world';
let str3: string = `hello world`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let und1: undefined = undefined;

// 원래 안되는데 tsconfig의 compilerOptions.stringNullChecks 설정으로 가능
let num9: number = null;

// 리터럴 타입 -> 값을 타입으로 씀!
let num10: 10 = 10;
// num10 = 12; 는 오류
let str5: 'hello' = "hello";
let bool3: true = true;
