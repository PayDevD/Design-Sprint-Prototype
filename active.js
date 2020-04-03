const applyButton = document.getElementById("applyButton");
const removeButton = document.getElementById("removeButton");
const timeTableButton = document.getElementById("timeTableButton");

timeTableButton.onclick = () => {
  console.log("시간표 보기");
  window.open("./timeTable.html");
};
/*
 시간표 보기와 신청이 일치하는 case를 prototype으로 잡고 
같은 html문서로 이동하도록 함
*/

applyButton.onclick = () => {
    console.log("신청");
    location.href = "result.html";
}

// 희망 과목 선택 확인용 flag
let flag1, flag2, flag3, flag4;
flag1 = flag2 = flag3 = flag4 = 0;

document.getElementById("class1").onclick = () => {
  if (flag1 === 0) {
    flag1 = 1;
    // WishList 추가
    document.getElementById("tblWish").innerHTML +=
      "<tr>\
       <td>1</td>\
       <td>데이터통신</td>\
       </tr>";
    // 학점 추가
    document.getElementById("majorCredit").innerHTML =
      Number(document.getElementById("majorCredit").innerText) + 3;
  }
};

document.getElementById("class2").onclick = () => {
  if (flag2 === 0) {
    flag2 = 1;
    document.getElementById("tblWish").innerHTML +=
      "<tr>\
        <td>2</td>\
        <td>운영체제및실습</td>\
        </tr>";
    document.getElementById("majorCredit").innerHTML =
      Number(document.getElementById("majorCredit").innerText) + 3;
  }
};

document.getElementById("class3").onclick = () => {
  if (flag3 === 0) {
    flag3 = 1;
    document.getElementById("tblWish").innerHTML +=
      "<tr>\
        <td>3</td>\
        <td>웹프로그래밍</td>\
        </tr>";
    document.getElementById("majorCredit").innerHTML =
      Number(document.getElementById("majorCredit").innerText) + 3;
  }
};

document.getElementById("class4").onclick = () => {
  if (flag4 === 0) {
    flag4 = 1;
    document.getElementById("tblWish").innerHTML +=
      "<tr>\
        <td>4</td>\
        <td>프로그래밍언어개론</td>\
        </tr>";
    document.getElementById("majorCredit").innerHTML =
      Number(document.getElementById("majorCredit").innerText) + 3;
  }
};
