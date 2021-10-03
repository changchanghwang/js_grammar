//객체
const superman = {
    name: 'clark',
    age: 33,
};

//접근
console.log(superman.name);
console.log(superman['age']);
console.log('-----------------------------')

//추가
superman.gender = 'male';
console.log(superman);
superman['hairColor'] = 'black';
console.log(superman);
console.log('-----------------------------')

//삭제
delete superman.hairColor;
console.log(superman);
console.log('-----------------------------')

//존재여부 확인
console.log(superman.birthDay); //undefined
console.log('birthDay' in superman); //false
console.log('age' in superman); //true
console.log('-----------------------------')

//객체반환 함수
function makeObject(name, age) {
    return {
        name, //name:name
        age, //age:age
        hobby: 'football',
    };
}

const Mike = makeObject('Mike', 30);
console.log(Mike);
console.log('-----------------------------')

//객체 in
function isAdult(user) {
    if (user.age < 20) {
        //user.age가 undefined 일 경우 false
        return false; // 이부분을 건너뛰게 됨
    }
    return true; // 결론적으로 true를 반환함
}

function IsAdult(user) {
    if (!('age' in user) || user.age < 20) {
        return false;
    }
    return true;
}

const Jane = {
    name: 'Jane',
};

console.log(isAdult(Jane));
console.log(IsAdult(Jane));
console.log('-----------------------------')

//객체 for ... in
for(x in Mike){
    console.log(x) //Mike가 가진 key값
    console.log(Mike[x]) //Mike가 가진 value값
}
console.log('-----------------------------')
