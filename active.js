const applyButton = document.getElementById("applyButton");
const removeButton = document.getElementById("removeButton");
const timeTableButton = document.getElementById("timeTableButton");
let priority = 0;
let selectedPriority = 0;
const tblWish = document.getElementById("tblWish");
timeTableButton.onclick = () => {
  console.log("시간표 보기");
  window.open("./timeTable.html");
};
/*
 시간표 보기와 신청이 일치하는 case를 prototype으로 잡고 
같은 html문서로 이동하도록 함
*/

// 희망 과목 선택 확인용 flag
let flags = [];
let lectureName = "";
for (let i = 1; i < 14; i++) {
  const lecture = document.getElementById(`class${i}`);
  lecture.onclick = () => {
    document.getElementById("plan").innerText = "수업목표 : .....할 수 있다.";
    document.getElementById("evaluation").innerText =
      "평가 :  출석 10 / 과제 30 / 중간고사(지필평가) 30 / 기말고사(프로젝트) 30";
    flags[i - 1] = 1;
    order = i;
    lectureName = lecture.childNodes[1].innerText;
    console.log(lectureName);
  };
}

let order = 0;
applyButton.onclick = () => {
  switch (order) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      if (document.getElementById("majorCredit").innerText >= 12) {
        alert("전공 심화 학점 초과!");
        break;
      }
      if (tblWish.innerHTML.indexOf(lectureName) !== -1) {
        alert("이미 수강 희망하는 과목!");
        break;
      }
      document.getElementById("majorCredit").innerHTML =
        Number(document.getElementById("majorCredit").innerText) + 3;
      if (lectureName !== "데이터과학") {
        priority++;
        tblWish.innerHTML += `<tr id=${priority}>\
      <td>${priority}</td>\
      <td>${lectureName}</td>\
      </tr>`;
      } else {
        tblWish.innerHTML += `<tr id=0>\
      <td>0</td>\
      <td>${lectureName}</td>\
      </tr>`;
      }
      break;
    case 6:
      if (document.getElementById("baseCredit").innerText >= 6) {
        alert("전공 기초 학점 초과!");
        break;
      }
      if (tblWish.innerHTML.indexOf(lectureName) !== -1) {
        alert("이미 수강 희망하는 과목!");
        break;
      }
      priority++;
      document.getElementById("baseCredit").innerHTML =
        Number(document.getElementById("baseCredit").innerText) + 3;
      tblWish.innerHTML += `<tr id=${priority}>\
      <td>${priority}</td>\
      <td>${lectureName}</td>\
      </tr>`;
      break;
    case 7:
    case 8:
    case 9:
      priority++;
      document.getElementById("normalCredit").innerHTML =
        Number(document.getElementById("normalCredit").innerText) + 3;
      if (document.getElementById("normalCredit").innerText >= 6) {
        alert("일반 선택 학점 초과!");
        break;
      }
      if (tblWish.innerHTML.indexOf(lectureName) !== -1) {
        alert("이미 수강 희망하는 과목!");
        break;
      }
      tblWish.innerHTML += `<tr id=${priority}>\
      <td>${priority}</td>\
      <td>${lectureName}</td>\
      </tr>`;
      break;
    case 10:
    case 11:
    case 12:
    case 13:
      if (document.getElementById("majorCredit").innerText >= 12) {
        alert("전공 심화 학점 초과!");
        break;
      }
      if (tblWish.innerHTML.indexOf(lectureName) !== -1) {
        alert("이미 수강 희망하는 과목!");
        break;
      }
      priority++;
      document.getElementById("majorCredit").innerHTML =
        Number(document.getElementById("majorCredit").innerText) + 3;
      tblWish.innerHTML += `<tr id=${priority}>\
      <td>${priority}</td>\
      <td>${lectureName}</td>\
      </tr>`;
      break;
  }
  document.getElementById("plan").innerText = "";
  document.getElementById("evaluation").innerText = "";
  wishListSorting();
};

const wishListSorting = () => {
  for(let i = 0; i < 13; i++) {
    if(document.getElementById(i) !== undefined) {
      tblWish.appendChild(document.getElementById(i));
    }
  }
}
document.getElementById("upButton").onlick = () => {};