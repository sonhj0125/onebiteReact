// 함수
// 중복으로 작성되는 코드들(유사한 기능) -> 함수로 해결 가능

// 함수선언
// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전");
// // 함수호출(소괄호와 함께)
// greeting(); // 안녕하세요. --> 함수 내부로 들어감
// console.log("호출 후");

let area1 = getArea(10, 20); // 200 area1변수에 값이 담김
console.log(area1);
// (인수 10, 20)
let area2 = getArea(20, 30); // 600
console.log(area2);

getArea(120, 200); // 24000

// 호이스팅
// -> 끌어올리다 라는 뜻 (선언문을 호출문보다 아래에 둬도 끌어올려서 실행됨)
function getArea(width, height) {
  // (매개변수 width, height)
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;

  //   console.log(area);
  return area; // 반환값(함수호출의 결과값)
}
