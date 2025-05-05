// 타입 별칭(Type alias) => 타입 별칭을 사용하여 코드 중복 제거
type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthday: string;
    location: string;
};
// type User = {} 'User' 식별자가 중복되었습니다.
// 동일한 스코프에 중복되는 타입 별칭을 사용할 수 없음

// 스코프가 다르면 따로 사용 가능
function func() {
    type User = {};
}

let user: User = {
    id: 1,
    name: "John",
    email: "playran91@gmail.com",
    phone: "000-000-0000",
    birthday: "1970-01-01",
    location: "부천시"
}

// 인덱스 시그니처
// key와 value의 타입을 기준으로 규칙을 이용해서 유연하게 객체 타입 정의
type CountryCodes = {
    [key: string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}
// 주의점 1. 인덱스 시그니처는 규칙을 위반하지만 않으면 허용함.
// 객체 property가 없으면 규칙을 위반할 property가 없음
let countryCodes2: CountryCodes = {};

// 주의점 2. 인덱스 시그니처를 사용하는 객체 타입에서 추가적인 property를 지정해놓으려면
// 그 property의 타입이 value 타입이 인덱스 시그니처 타입과 일치하거나 호환되어야 함
type CountryNumberCodes = {
    [key: string]: number;
    // Korea는 꼭 있어야 하는 property로 명시
    // Korea: string; // 'Korea' 형식이 'string' 속성을 'string' 인덱스 유형 'number'에 할당할 수 없습니다.
}
let countryNumberCodes: CountryNumberCodes = {
    // Korea: "ko", // '{ Korea: string; }' 형식은 CountryNumberCodes 형식에 할당할 수 없습니다. Korea 속성은 인덱스 시그니처와 호환되지 않습니다.
}
