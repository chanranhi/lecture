// type User = {} 'User' 식별자가 중복되었습니다.
// 동일한 스코프에 중복되는 타입 별칭을 사용할 수 없음
// 스코프가 다르면 따로 사용 가능
function func() {
}
let user = {
    id: 1,
    name: "John",
    email: "playran91@gmail.com",
    phone: "000-000-0000",
    birthday: "1970-01-01",
    location: "부천시"
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
// 주의점 1. 인덱스 시그니처는 규칙을 위반하지만 않으면 허용함.
// 객체 property가 없으면 규칙을 위반할 property가 없음
let countryCodes2 = {};
let countryNumberCodes = {
// Korea: "ko", // '{ Korea: string; }' 형식은 CountryNumberCodes 형식에 할당할 수 없습니다. Korea 속성은 인덱스 시그니처와 호환되지 않습니다.
};
export {};
