"use strict";
//removeNull() 함수 테스트
/*
1. 각 문자열을 ',' 단위로 분리시켜준다. 
2. 만약 배열 안에 \r\n, 앞자리 공백, 뒷자리 공백이 있다면 제거해준다. 
3. 배열이 전부 공백이라면 제외해준다.
4. 변환한 배열의 길이가 2보다 짧다면 '-'을 출력해준다.
*/
const testData = [
  " X",
  " a, b, ",
  ", , , ,",
  "\r\ndet, 0, test",
  "abe,d, e",
  "asdfae,sefas, efasef",
  " 고봉삼계탕,삼계탕,서울 강남구 봉은사로 524 삼성동 159 ",
];

testRemoveNull(testData);

function testRemoveNull(rows) {
  const data = [];

  for (let i = 0; i < rows.length; i++) {
    let tempArr = rows[i] //
      .split(/[\,/\r\n]+/)
      .map((row) => row.replace(/^[\s]+|[\s]+$/, ""))
      .filter((e) => e === 0 || e);

    if (tempArr.length !== 0) {
      if (tempArr.length === 3) {
        data.push(tempArr);
        continue;
      } else {
        const len = tempArr.length;
        for (let j = len; j < 3; j++) {
          tempArr.push("-");
        }
        data.push(tempArr);
      }
    }
  }
  console.log(data);
}
