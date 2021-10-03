//함수 선언문

show(); //함수가 선언되기 전에 해도 실행됨

function show(){
   return console.log('hi');
}
console.log('-----------------------------')

//함수 표현식

let Show = function(){
    return console.log('hi');
}

Show();
console.log('-----------------------------')

//화살표 함수

let shoW = ()=>{
    console.log('hi');
}

shoW();
console.log('-----------------------------')
