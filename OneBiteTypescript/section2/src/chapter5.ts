// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 상태, 옵션, 플래그 등을 표현할 때 유용함

// 숫자형 enum
// 값을 지정하지 않으면 0부터 자동 증가
// 숫자형 enum의 특별한 기능으로 이름->값 / 값 -> 이름 역 매핑 가능
enum Role {
    ADMIN,
    USER = 10,
    GUEST,
}
// 문자열 enum
// 자동 증가가 불가능하므로 모든 멤버에 값을 지정해야함
enum Language {
    korean = 'ko',
    english = 'en',
}
// 이종 enum
// 문자열과 숫자를 혼합해서 사용할 수 있지만 권장되지 않음
enum Gender {
    male = 0,
    female = 1,
    nonBinary = 'nonBinary',
}
// 성능 최적화를 위해 const enum 을 사용할 수 있음
// const enum은 컴파일 시점에 완전히 제거되고 사용된 곳에 값이 인라인으로 삽입됨
const enum Adult {
    teenager,
    adult,
}

const user1 = {
    name: "CHANRAN",
    role: Role.ADMIN,
    language: Language.korean,
    gender: Gender.female,
    isAdult: Adult.adult, // 컴파일 후 1
};
const user2 = {
    name: "MEMBER",
    role: Role.USER,
    language: Language.english,
    gender: Gender.male,
    isAdult: Adult.adult,
};
const user3 = {
    name: "GUEST",
    role: Role.GUEST,
    language: Language.english,
    gender: Gender.nonBinary,
    isAdult: Adult.teenager,
};

// npm run tsx src/chapter5.ts
console.log(user1, user2, user3);

// 숫자형 enum 역 매핑(Reverse mappings)
const admin = Role.ADMIN;
const nameOfRole = Role[admin];
console.log('nameOfRole reverse mapping:' + nameOfRole);

// type RoleStrings = "ADMIN" | "USER" | "GUEST";
type RoleStrings = keyof typeof Role;
// type LanguageStrings = "korean" | "english";
type LanguageStrings = keyof typeof Language;
// type GenderStrings = "male" | "female" | "nonBinary";
type GenderStrings = keyof typeof Gender;

const roleKey: RoleStrings = 'ADMIN';
const languageKey: LanguageStrings = 'korean';
const genderKey: GenderStrings = 'female';

console.log(roleKey, languageKey, genderKey);