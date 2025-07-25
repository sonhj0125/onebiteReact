// 형 변환
// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
// console.log(result); // 1020
// num이 묵시적으로 String 타입으로 형 변환됨

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1); // 20

let str2 = "10개";
// let strToNum2 = Number(str2);
// console.log(strToNum2); // NaN
let strToNum2 = parseInt(str2); // parseInt도 숫자가 앞에 나와있어야 함
// console.log(strToNum2); // 10

// 숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1);
// console.log(numTostr1 + "입니다"); // 20입니다
