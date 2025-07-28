// 콜백함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함
// 1. 콜백함수
function main(value) {
  //console.log(value);
  //console.log(1);
  //console.log(2);
  value();
  //console.log("end");
}

/*
function sub() {
   console.log("I am sub");
}
main(sub); // I am sub
*/

// 또는
/*
main(function sub() {
    console.log("I am sub");
});
*/
// 또는

main(() => {
  //console.log("I am sub");
});

// 2. 콜백함수의 활용
/*
function repeat(count) {
    for(let idx = 1; idx <= count; idx++) {
        //console.log(idx);
    }
}
function repeatDouble(count) {
    for(let idx = 1; idx <= count; idx++) {
        //console.log(idx * 2);
    }
}
repeat(5);
repeatDouble(5);
// 중복 코드 발생 --> 콜백함수를 통해 간결하게 가능
*/

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
