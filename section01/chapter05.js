// 자료형
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let nInf = -Infinity;
let nan = NaN; // Not a Number
// console.log(1 * "hello"); // NaN

// 2. String Type
let myName = "손혜정";
let myLocation = "서울";
let introduce = myName + myLocation;
// console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 템플릿 리터럴 문법
// console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
// console.log(none); // undefined 출력
// undefined는 변수를 선언하고 아무런 값도 할당하지 않았을 때, 자동으로 들어가는 값
// null은 명시적으로 변수에 할당해줘야 하는 값(아무것도 없음을)
