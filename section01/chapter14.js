// 스코프(Scope)
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 함수 선언식에서는 지역 스코프
  // if문이나 for문에서는 지역 스코프를 갖지 않음
}

funcA(); // 1
// console.log(b); // b is not defined

if (true) {
  let c = 1; // 지역 스코프
}

// console.log(c); // c is not defined

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
}

// console.log(d); // d is not defined
