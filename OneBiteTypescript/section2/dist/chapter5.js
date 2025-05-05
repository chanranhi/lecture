// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 상태, 옵션, 플래그 등을 표현할 때 유용함
// 숫자형 enum
// 값을 지정하지 않으면 0부터 자동 증가
// 숫자형 enum의 특별한 기능으로 이름->값 / 값 -> 이름 역 매핑 가능
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
// 문자열 enum
// 자동 증가가 불가능하므로 모든 멤버에 값을 지정해야함
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
// 이종 enum
// 문자열과 숫자를 혼합해서 사용할 수 있지만 권장되지 않음
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender["nonBinary"] = "nonBinary";
})(Gender || (Gender = {}));
const user1 = {
    name: "CHANRAN",
    role: Role.ADMIN,
    language: Language.korean,
    gender: Gender.female,
    isAdult: 1 /* Adult.adult */, // 컴파일 후 1
};
const user2 = {
    name: "MEMBER",
    role: Role.USER,
    language: Language.english,
    gender: Gender.male,
    isAdult: 1 /* Adult.adult */,
};
const user3 = {
    name: "GUEST",
    role: Role.GUEST,
    language: Language.english,
    gender: Gender.nonBinary,
    isAdult: 0 /* Adult.teenager */,
};
// npm run tsx src/chapter5.ts
console.log(user1, user2, user3);
// 숫자형 enum 역 매핑(Reverse mappings)
const admin = Role.ADMIN;
const nameOfRole = Role[admin];
console.log('nameOfRole reverse mapping:' + nameOfRole);
const roleKey = 'ADMIN';
const languageKey = 'korean';
const genderKey = 'female';
console.log(roleKey, languageKey, genderKey);
export {};
