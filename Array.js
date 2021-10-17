//배열은 문자 뿐만 아니라 숫자, 객체, 함수 등도 포함가능
console.log('배열');
let arr = [
  'hwang',
  3,
  false,
  {
    name: 'hwang',
    age: '27',
  },
  function () {
    console.log('hi');
  },
];
console.log('-----------------------------');
//배열의 길이
console.log('배열의 길이');
console.log(arr.length); // 5
console.log('-----------------------------');

// psuh() : 배열 끝에 추가
console.log('push');
arr.push('안녕하세요');
console.log(arr);
console.log('-----------------------------');

//pop(): 배열 끝 요소 제거
console.log('pop');
arr.pop();
console.log(arr);
console.log('-----------------------------');

//shift(),unshift() 배열 앞에 제거/추가
//추가(여러개 가능)
console.log('unshift');
arr.unshift('hi', '황');
console.log(arr);
console.log('-----------------------------');

//제거(맨앞 하나만 가능)
console.log('shift');
arr.shift();
console.log(arr);
console.log('-----------------------------');

//배열을 이용한 for문
console.log('for문');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('-----------------------------');

//for of문
console.log('for of문');
for (let ar of arr) {
  console.log(ar);
}
console.log('-----------------------------');

//splice splice(n,m,x) n부터 m까지 지움 x는 추가
console.log('splice');
arr = [0, 1, 2, 3, 4, 0];
console.log(arr);
arr.splice(1, 2, 10, 20);
console.log(arr);
console.log('-----------------------------');
//slice(n,m) n부터 m-1까지 반환
console.log('slice');
console.log(arr.slice(1, 2));
console.log('-----------------------------');

//concat(arr1,arr2) 합쳐서 새배열 반환
console.log('concat');
console.log(arr.concat([1], [2]));
console.log('-----------------------------');

//indexOf,lastIndexOf //값이 몇번째 인덱스인지 반환
console.log('indexOf, lastIndexOf');
console.log(arr.indexOf(0));
console.log(arr.indexOf(0, 2));
console.log(arr.lastIndexOf(0));
console.log('-----------------------------');

//includes(값): 포함하는지 확인,true,false 반환
console.log('includes');
console.log(arr.includes(3));
console.log(arr.includes(1));
console.log('-----------------------------');

//sort, reduce
//sort 배열 재정렬, 배열자체가 변경
console.log('sort');
arr = [71, 5, 42, 2, 83];

arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
//5,71,42,2,83
//5,71,42,2,83
//5,42,71,2,83
//5,2,42,71,83
//2,5,42,71,83
//2,5,42,71,83
//2,5,42,71,83
//Lodash 라이브러리 사용하면 편함.

console.log(arr);
console.log('-----------------------------');

//reduce
//인수로 함수를 받음
//(이전까지누적계산값, 현재값) => {return 계산값};
console.log('reduce');

//배열의 모든 수 합치기
arr = [1, 2, 3, 4, 5];

let result = arr.reduce((prev, cur) => {
  console.log(prev, cur);
  return prev + cur;
}, 0);
console.log(result);

let user = [
  { name: 'Tom', age: 30 },
  { name: 'jone', age: 10 },
  { name: 'Me', age: 27 },
  { name: 'sue', age: 20 },
  { name: 'anna', age: 25 },
  { name: 'herry', age: 27 },
  { name: 'Mike', age: 3 },
];

result = user.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result);
