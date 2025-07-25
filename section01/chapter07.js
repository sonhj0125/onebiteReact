// 연산자 1
// 1. 대입 연산자(=)
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
// console.log(num6); // 21
let num7 = (1 + 2) * 10;
// console.log(num7); // 30

// 3. 복합 대입 연산자(산술 + 대입)
let num8 = 10;
// num8 = num8 + 20;
num8 += 20;
// console.log(num8); // 30
num8 -= 20;
// console.log(num8); // 10
num8 *= 20;
num8 /= 20;
num8 %= 20;

// 4. 증감 연산자
let num9 = 10;
// num9++; num9--;
// ++num9; --num9;
// console.log(num9); // 11
// console.log(num9++); // 10 후위연산
// console.log(num9--);
// console.log(++num9); // 11 전위연산
// console.log(--num9);

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// console.log(or, and, not); // true false false

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
// == 는 값의 자료형까지 같은지 비교가 되지 않음
let comp2 = 1 !== 2; // 비동등 비교 연산자
// console.log(comp1, comp2);  // flase true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
// console.log(comp3, comp4); // true false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
// console.log(comp5, comp6); // true true
