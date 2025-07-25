// 함수 표현식과 화살표 함수

// 1. 함수 표현식
// 함수 선언문으로 만든 funcA와는 달리 함수 표현식으로 만든 funcB는 호이스팅이 되지 않음
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// console.log(varA); // 함수 자체가 출력됨
// ƒ funcA(){
//     console.log("funcA");
// }
varA();

let varB = function () {
  // 익명함수
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
