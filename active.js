const applyButton = document.getElementById("applyButton");
const removeButton = document.getElementById("removeButton");
const timeTableButton = document.getElementById("timeTableButton");
let priority = 0;
let selectedPriority = 0;

timeTableButton.onclick = () => {
  console.log("시간표 보기");
  window.open("./timeTable.html");
};
/*
 시간표 보기와 신청이 일치하는 case를 prototype으로 잡고 
같은 html문서로 이동하도록 함
*/
let flag = 0;
applyButton.onclick = () => {

  if (flag === 0) {
    // WishList 추가
    priority++;
    document.getElementById("tblWish").innerHTML +=
      `<tr id=${priority}>\
     <td>${priority}</td>\
     <td>데이터통신</td>\
     </tr>`;
    // 학점 추가
    document.getElementById("majorCredit").innerHTML =
      Number(document.getElementById("majorCredit").innerText) + 3;
  }
  document.getElementById("plan").innerText = "";
  document.getElementById("evaluation").innerText = "";
};

// 희망 과목 선택 확인용 flag
let flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag11, flag12, flag13, flag14;
flag1 = flag2 = flag3 = flag4 = flag5 = flag6 = flag7 = flag8 = flag9 = flag10 = flag11 = falg12 = flag13 = flag14 = 0;

document.getElementById("class5").onclick = () => {
    document.getElementById("plan").innerText = 
    "수업목표 : Oracle SQL 11g2 를 사용하여 SQL문을 익히고, ER 모델을 활용하여 계층형 데이터베이스를 설계할 수 있다.";
    document.getElementById("evaluation").innerText = 
    "평가 :  출석 10 / 과제 30 / 중간고사(지필평가) 30 / 기말고사(프로젝트) 30";
    flag5 = 1;
  }
};

document.getElementById("class1").onclick = () => {

}

document.getElementById("upButton").onlick = () => {
  
}