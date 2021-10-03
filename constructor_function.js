//보통 생성자함수는 첫글자가 대문자
//붕어빵 틀
function User(name, age) {
    //this = {}
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name)
    }
    //return this;
}

//new연산자 사용을 통한 호출
//붕어빵
let user1 = new User('Mike', 30);
let user2 = new User('Jane', 20);
let user3 = new User('Tom', 10);
let user4 = new User('hwang',27);

console.log(user1)
console.log(user2)
console.log(user3)
user4.sayName();
