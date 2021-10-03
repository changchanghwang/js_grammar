//유일성을 보장해줌
let a = Symbol('id');
let b = Symbol('id');

console.log(a===b);
//description으로 이름을 알 수 있음.
console.log(a.description)
console.log('-------------------------')

//a !== b

//Symbol.for():전역심볼
//하나의 심볼만을 보장
a = Symbol.for('id')
b = Symbol.for('id')
console.log(a===b);
//전역심볼일때는 Symbol.keyFor로 값을 알 수 있음.
console.log(Symbol.keyFor(a))
console.log('-------------------------')

//Symbol key는 일반적인 object method로 볼 수 없음.
const id = Symbol('id');
const user = {
    name : 'Mike',
    age:30,
    [id]: 'myId'
}
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log('---심볼을 보자---')
console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));
console.log('-------------------------')

//유일한 property를 사용하고 싶을 때 심볼을 사용.