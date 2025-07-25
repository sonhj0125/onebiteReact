// 변수와 상수
// 1. 변수 -  변하는 수
let age;

age = 30;

// 2. 상수 - 변할 수 없거나 변하지 말아야 하는 값(초기화 필요)
const birth = "1997.02.13"; // 초기화, 선언

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let s_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let na2me;
let _s2name;
//let 2name; 불가

// 3-3. 예약어를 사용할 수 없다.
// let let; 불가
// let if; 불가

// 4. 변수 명명 가이드
let saleCount = 1;
let refundCount = 1;
let totalSalesCount = saleCount - refundCount;
