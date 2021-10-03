//method : 객체 프로퍼티로 할당 된 함수
const superman = {
    name:'clark',
    age: 33,
    //method
    fly(){
        console.log(`${this.name}가 날아갑니다`)
        //this는 함수가 포함된 객체를 가르킴
    }
}
superman.fly();
console.log('-----------------------------')

const hwang ={
    name: 'hwang',
    age: 27,
    fly: ()=>{
        console.log(`${this.name}이 날아갑니다.`)//undefined
        //화살표 함수는 일반함수와 달리 자신만의 this를 가지지 않음.
        //외부에서 this를 가져옴
        //브라우저 환경에서는 window.
        //nodejs 환경에서는 global
        //객체의 method는 화살표 함수로 작성하지 않는 것이 좋음.
    }
}
hwang.fly();
console.log('-----------------------------')

//this를 써야하는 이유
let boy={
    name:"Mike",
    showName(){
        console.log(boy.name)
    }
}
let man = boy;
boy = null;

// man.showName(); 
//showName 함수가 boy의 name을 호출하는 것이라서
//boy = null이면 name이 없어져서 프로퍼티를 읽을 수 없는 에러가 발생.

let girl={
    name:"Jane",
    showName(){
        console.log(this.name)
    }
}
let woman = girl;
girl = null;

woman.showName();
console.log('-----------------------------')





