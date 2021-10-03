//배열은 문자 뿐만 아니라 숫자, 객체, 함수 등도 포함가능

let arr = [
    'hwang',
    3,
    false,
    {
        name:"hwang",
        age:"27",
    },
    function(){
        console.log('hi')
    }
]
console.log('-----------------------------')
//배열의 길이
console.log(arr.length); // 5
console.log('-----------------------------')

// psuh() : 배열 끝에 추가
arr.push('안녕하세요')
console.log(arr);
console.log('-----------------------------')

//pop(): 배열 끝 요소 제거
arr.pop();
console.log(arr)
console.log('-----------------------------')

//shift(),unshift() 배열 앞에 제거/추가
//추가(여러개 가능)
arr.unshift('hi','황')
console.log(arr)
console.log('-----------------------------')

//제거(맨앞 하나만 가능)
arr.shift()
console.log(arr)
console.log('-----------------------------')

//배열을 이용한 for문
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log('-----------------------------')

//for of문
for(let ar of arr){
    console.log(ar)
}
console.log('-----------------------------')
