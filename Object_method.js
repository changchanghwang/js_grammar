//computed property
let a = 'age';
let user = {
    name:'mike',
    [a]:30
}
console.log(user.age); //30

function makeObj(key, val){
    return{
        [key]:val,
    }
}
const obj = makeObj("이름", 'hwang');
console.log(obj)
console.log('-------------------------')


//Object.assign(): 객체 복제

// let cloneUser = user; // X
//위처럼 하면 객체가 복사되지 않고 참조값이 복사.
//cloneUser의 이름을 바꾸면 user도 바꿔짐
let newUser = Object.assign({name:'Tom'}, user); //{}는 newUser의 초기값
//초기값에 user객체를 덮어씌우는 모양새
//이때 {}의 값이 user의 값과 겹치면 덮어씌움
//,를 통해서 여러개 사용 가능
console.log(newUser)
newUser.name= 'Jane';
console.log(newUser)
console.log(user);
console.log('-------------------------')

//Object.keys():키 배열 반환
console.log(Object.keys(user))
console.log('-------------------------')

//Object.values():값 배열 반환
console.log(Object.values(user));
console.log('-------------------------')

//Object.entries():키/값 배열 반환
console.log(Object.entries(user));
console.log('-------------------------')

//Object.formEntries(): 키/값 배열을 객체로 만들어줌
let arr = [
    ['name','hwang'],
    ['age',27],
    ['gender','male']
];
console.log(Object.fromEntries(arr));
console.log('-------------------------')

