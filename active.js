const applyButton = document.getElementById("applyButton");
const removeButton = document.getElementById("removeButton");
const timeTableButton = document.getElementById("timeTableButton");
let priority = 0;
let selectedPriority = 0;
const tblWish = document.getElementById("tblWish");
/**
$(document).ready(function(){

  let list = {서양 철학의 이해, 거시 경제학, 글로벌 영어, 이산수학, 선형대수, 논리회로, 효과적인 의사소통};
  for(itr = 0 ; itr < list.length; itr++){
    let temp = document.createElement('li');
    temp.innerHTML = itr;

  }

})
**/
tblWish.innerHTML += `<tr id=0>\
      <td>0</td>\
      <td>데이터과학</td>\
      </tr>`;
document.getElementById("majorCredit").innerHTML =
  Number(document.getElementById("majorCredit").innerText) + 3;

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
    let lectureName = lecture.childNodes[1].text;
    document.getElementById("plan").innerText = lectureName+"에서는 ...할 수 있다.";
    document.getElementById("evaluation").innerText =
      "출석 10 / 과제 30 / 중간고사(지필평가) 30 / 기말고사(프로젝트) 30";
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
      if (document.getElementById("normalCredit").innerText >= 6) {
        alert("일반 선택 학점 초과!");
        break;
      }
      if (tblWish.innerHTML.indexOf(lectureName) !== -1) {
        alert("이미 수강 희망하는 과목!");
        break;
      }
      priority++;
      document.getElementById("normalCredit").innerHTML =
        Number(document.getElementById("normalCredit").innerText) + 3;
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
    if(typeof document.getElementById(i) !== "undefined") {
      tblWish.appendChild(document.getElementById(i));
      document.getElementById(i).onclick = () => {
        selectedPriority = i;
      }
    }
  }
}


document.getElementById("upButton").onclick = () => {
  let original = document.getElementById(selectedPriority);
  let changed = document.getElementById(selectedPriority - 1);

  if(selectedPriority > 1 && selectedPriority !== 0) {
    original.removeAttribute("id");
    changed.removeAttribute("id");

    original.setAttribute("id", selectedPriority - 1);
    changed.setAttribute("id", selectedPriority);

    original.childNodes[1].innerText = selectedPriority - 1;
    changed.childNodes[1].innerText = selectedPriority;

    selectedPriority--;
    wishListSorting();

  }
};

document.getElementById("downButton").onclick = () => {
  let original = document.getElementById(selectedPriority);
  let changed = document.getElementById(selectedPriority + 1);

  if(typeof document.getElementById(selectedPriority + 1) !== "undefined" && selectedPriority !== 0) {
    original.removeAttribute("id");
    changed.removeAttribute("id");

    original.setAttribute("id", selectedPriority + 1);
    changed.setAttribute("id", selectedPriority);

    original.childNodes[1].innerText = selectedPriority + 1;
    changed.childNodes[1].innerText = selectedPriority;

    selectedPriority++;
    wishListSorting();

  }
}

document.getElementById("removeButton").onclick = () => {
  if(selectedPriority === 0) {
    tblWish.removeChild(document.getElementById(0));
    document.getElementById("majorCredit").innerHTML =
        Number(document.getElementById("majorCredit").innerText) - 3;
  }
  else {
    let lectureName = document.getElementById(selectedPriority).childNodes[3].innerText;
    switch(lectureName) {
      case "종합설계1":
      case "데이터과학":
      case "컴퓨터특강":
      case "데이터베이스 설계":
      case "데이터통신":
      case "운영체제및실습":
      case "웹프로그래밍":
      case "프로그래밍언어개론":
        document.getElementById("majorCredit").innerHTML =
        Number(document.getElementById("majorCredit").innerText) - 3;
        break;
      case "이산수학":
        document.getElementById("baseCredit").innerHTML =
        Number(document.getElementById("baseCredit").innerText) - 3;
        break;
      case "서양 철학의 이해":
      case "거시 경제학":
      case "효과적인 의사소통":
        document.getElementById("normalCredit").innerHTML =
        Number(document.getElementById("normalCredit").innerText) - 3;
        break;

    }
    tblWish.removeChild(document.getElementById(selectedPriority));
    priority--;

    for(let i = selectedPriority + 1; i < 13; i++) {
      let node = document.getElementById(i);
      if(typeof node !== "undefined") {
        node.removeAttribute("id");
        node.setAttribute("id", i - 1);
        node.childNodes[1].innerText = i - 1;
      }
    }
  }
}
