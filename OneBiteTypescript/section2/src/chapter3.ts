// 객체 object
let user: object = {
    id: 1,
    name: "John",
}

// user.id; 'object' 형식에 'id' 속성이 없습니다.
// 오류 발생 -> 'user는 객체다'라는 정보외에 아무정보도 없기 때문. user 객체에 어떤 프로퍼티나 메소드가 있는지 모름
// 따라서 객체 리터럴 타입을 사용해야 함
// 구조적 타입 시스템 => property based type system
let user2: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "John",
}
user2.id;

// 선택적인 property일 경우 optional property로 사용
let user3: {
    age?: number
} = {}
// property 값을 바꾸면 안되는 경우 readonly를 명시하여 읽기전용 property로 만들자
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY_API_KEY"
}
// config.apiKey = "MY_API_KEY2"; 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
