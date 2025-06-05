/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기함
 */

// value => number이면 : toFixed
// value => string이면 : toUpperCase
function func1(value: number | string | Date) {
    value; // value는 number | string
    // console.log(value.toFixed()); // 오류. 'string | number' 형식에 'toFixed' 속성이 없습니다.
    // console.log(value.toUpperCase()); // 오류. 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
    if (typeof value === 'number') { // typeof가 타입 좁히기를 도와주는 타입 가드로 동작
        // 조건문 내부에서 number타입으로 보장이 됨
        console.log(value.toFixed());
    } else if(typeof value === 'string') {
        console.log(value.toUpperCase());
    }
}

// value => Date이면 : getTime
function func2(value: number | string | Date | null) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if(typeof value === 'object') {
        // console.log(value.getTime()); // 인수에 Date까지만 있을때는 오류가 아님
        // 인수에 null 타입이 포함되는 경우에 'value'는 'null'일 수 있습니다. 오류 발생
        // 이럴경우 typeof가 아니고 새로운 타입가드를 사용해야 함
    }
}

// value => Date이면 : getTime
function func3(value: number | string | Date | null) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        console.log(value.getTime());
    }
}

type Person = {
    name: string;
    age: number;
}

// value => Person : name은 age살 입니다.
function func4(value: number | string | Date | null | Person) {
    if (typeof value === 'number') { // 타입 좁히기를 도와주는 타입 가드로 동작
        // 조건문 내부에서 number타입으로 보장이 됌
        console.log(value.toFixed());
    } else if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        console.log(value.getTime());
    // } else if(value instanceof Person) { // 오류. 'Person'은 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
        // instanceof는 우측항에 타입이 들어오면 안됨. 우측 "클래스"의 인스턴스인지 확인하는 문법임. 객체 타입 Person은 활용 안됨
    } else if(value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}