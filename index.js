// 매일 함께하는 음료 콘텐츠에 사용되는 태그 선언
const contents02Tag = document.querySelector(".wrap02 .contents-frame");

const juiceTabs = document.querySelectorAll(".juice-tab"); 
const selectedBar = document.querySelector(".choice-bar > .selected")

const menuName = document.querySelectorAll(".juice-menu .menu-title")
const menuImage = document.querySelectorAll(".juice-img > img")

const juiceMenu = document.querySelectorAll(".juice-menu");
const leftTag = document.querySelector(".left-arrow");
const rightTag = document.querySelector(".right-arrow");

// 신메뉴 이름 나올 때 사용되는 태그 선언
const contents03Tag = document.querySelector(".wrap03 .contents-frame");
const new01_pTag =document.querySelector(".newMenu-frame > p:nth-child(2)")
const new02_pTag =document.querySelector(".newMenu-frame > p:nth-child(4)")
const new03_pTag = document.querySelector(".newMenu-frame > p:nth-child(6)")

// 그리드 태그
const GridItem = document.querySelectorAll(".grid-container .grid")

// ---------------------- function -----------------------

// 자세한 함수설명은 함수 클릭 후 F12를 누르면 해당 함수코드로 이동합니다.
// 누르지 않아도 하단에 함수 적어두었습니다.

juiceList_Click(); //음료 카테고리 선택시 하단 선택 바 이동 함수
Default_Show(); //기본 각 음료 리스트 위치 선정 함수
MilkTea_ClickBtn(); //좌우 버튼 눌렀을 때 음료이미지 변경 함수


// Event 01 스크롤 시
document.addEventListener("scroll", function () {;

    // 조건문을 이용했습니다.
    // 해당하는 조건의 스크롤 위치에 이동했을 때 발생합니다.
    
    if (500 <= scrollY && scrollY < 1300) {

        // 간단한 Opacity와 Padding 등을 조절하여 자연스럽게 등장하도록 했습니다.
        contents02Tag.style.opacity = "1";
        contents02Tag.style.paddingTop = "0px";

        contents03Tag.style.paddingTop = "100px";
        contents03Tag.style.opacity = "0";

        new01_pTag.style.left = "47px";
        new01_pTag.style.transition = "none";
        new02_pTag.style.right = "175px";
        new02_pTag.style.transition = "none";
        new03_pTag.style.right = "18px";
        new03_pTag.style.transition = "none";
    }

    else if (scrollY < 500) {

        // 간단한 Opacity와 Padding 등을 조절하여 자연스럽게 등장하도록 했습니다.
        contents02Tag.style.paddingTop = "100px";
        contents02Tag.style.opacity = "0";
    }
    
    else if (1300 <= scrollY && scrollY < 2300) {

        // 간단한 Opacity와 Padding 등을 조절하여 자연스럽게 등장하도록 했습니다.
        contents03Tag.style.opacity = "1";
        contents03Tag.style.paddingTop = "0px";

        new01_pTag.style.left = "-149px";
        new01_pTag.style.transition = "all 1s";
        new01_pTag.style.transitionDelay = ".8s";
        
        new02_pTag.style.right = "-28px";
        new02_pTag.style.transition = "all 1s";
        new02_pTag.style.transitionDelay = ".8s";
        
        new03_pTag.style.right = "-172px";
        new03_pTag.style.transition = "all 1s";
        new03_pTag.style.transitionDelay = ".8s";

        // 각 Grid아이템들을 배열로 선언한 후 각각의 포지션 위치를 달리 하여
        // 스크롤 시 사방에서 등장하게 했습니다.

        // 동일한 값의 속성이 유지되는 코드는 For문을 활용했습니다.
        for (j = 0; j < GridItem.length; j++) {
            GridItem[j].style.opacity = "0";
        }

        GridItem[0].style.left = "-20%";
        GridItem[1].style.top = "-40%";
        GridItem[2].style.left = "30%";
        GridItem[3].style.top = "30%";
        GridItem[4].style.top = "40%";
    }

    else if (2300 <= scrollY) {

        // 각 Grid아이템들을 배열로 선언한 후 각각의 포지션 위치를 달리 하여
        // 스크롤 시 사방에서 등장하게 했습니다.

        // 동일한 값의 속성이 유지되는 코드는 For문을 활용했습니다.
        for (k = 0; k < GridItem.length; k++) {
            GridItem[k].style.left = "0px";
            GridItem[k].style.top = "0px";
            GridItem[k].style.opacity = "1";
        }
    }
});

// ---------------------- function description -----------------------

// Event 02 음료 카테고리를 클릭했을 때 실행되는 함수입니다.
function juiceList_Click() {

    // 얼핏 보기에 For문으로 최적화를 진행할 수 있을 것 같지만
    // 각각의 카테고리를 클릭 했을 때 실행이되야 하기때문에
    // 따로 설정해두었습니다.
    juiceTabs[0].addEventListener("click", function () {
        selectedBar.style.left = 0 * 148 + "px";
    })
    juiceTabs[1].addEventListener("click", function () {
        selectedBar.style.left = 1 * 148 + "px";
    })
    juiceTabs[2].addEventListener("click", function () {
        selectedBar.style.left = 2 * 148 + "px";
    })
    juiceTabs[3].addEventListener("click", function () {
        selectedBar.style.left = 3 * 148 + "px";
    })
    juiceTabs[4].addEventListener("click", function () {
        selectedBar.style.left = 4 * 148 + "px";
    })
    juiceTabs[5].addEventListener("click", function () {
        selectedBar.style.left = 5 * 148 + "px";
    })
    juiceTabs[6].addEventListener("click", function () {
        selectedBar.style.left = 6 * 148 + "px";
    })
}

// 기본적으로 음료리스트가 보여지는 위치를 잡기위한 함수입니다.
function Default_Show() {

    // juiceMenu의 인덱스들의 left값을 for문을 통해
    // 각각의 요소들이 271의 left값을 가지게 됩니다.
    for(i=0; i < juiceMenu.length; i++) {
        juiceMenu[i].style.left = 271 * i + "px";
    }
}

// Event 03 매일 함께하는 음료에서 좌우 버튼을 클릭했을 때 실행되는 함수입니다.
function MilkTea_ClickBtn() {

    // showCount라는 변수를 0으로 선언합니다.
    var showCount = 0;

    // 오른쪽 방향의 버튼을 클릭했을 때 상황입니다.
    rightTag.addEventListener("click", function() {
        showCount++; //클릭할 때마다 showCount의 값을 1씩 증가시킵니다.
    
        // 조건문을 통해 각각의 경우를 지정해줍니다.
        if (showCount == 1) {

            // showCount가 1이라는 의미는 오른쪽 버튼을 한번 클릭했음을 의미합니다.
            for (j = 0; j < juiceMenu.length; j++) {
                // 그에 따라 음료메뉴를 왼쪽으로 한칸씩 밉니다.
                juiceMenu[j].style.left = 271 * (j-1) + "px";
            };
            leftTag.style.visibility = "visible";
        }
        
        else if (showCount == 2) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-2) + "px";
            };
            leftTag.style.visibility = "visible";
        }
    
        else if (showCount == 3) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-3) + "px";
            };
            leftTag.style.visibility = "visible";
        }
    
        else if (showCount == 4) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-4) + "px";
            };
            leftTag.style.visibility = "visible";
        }
    
        else if (showCount == 5) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-5) + "px";
            };
            leftTag.style.visibility = "visible";
        }
    
        else if (showCount == 6) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-6) + "px";
            };
            
            // 만약 버튼을 끝까지 클릭한다면, 더 이상 클릭해도 움직이지 않도록
            // showCount를 6으로 지정해주고 오른쪽 버튼을 숨깁니다.
            showCount == 6;
            rightTag.style.visibility = "hidden";
        } 
    });
    
    // 왼쪽 방향의 버튼을 클릭했을 때 상황입니다.
    leftTag.addEventListener("click", function() {
        showCount--; //클릭할 때마다 showCount의 값을 1씩 감소시킵니다.
    
        // 오른쪽버튼을 클릭했을 때와 같은 매커니즘으로
        // 버튼 횟수만큼 음료메뉴를 오른쪽으로 밉니다.

        // 만약 아래와 같이 showCount가 0이 된다면
        // 처음으로 돌아왔다는 의미이므로 왼쪽 버튼을 숨깁니다.
        if (showCount == 0) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j) + "px";
            };
            leftTag.style.visibility = "hidden";
        }
    
        else if (showCount == 1) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-1) + "px";
            };
            rightTag.style.visibility = "visible";
        }
        
        else if (showCount == 2) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-2) + "px";
            };
            rightTag.style.visibility = "visible";
        }
    
        else if (showCount == 3) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-3) + "px";
            };
            rightTag.style.visibility = "visible";
        }
    
        else if (showCount == 4) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-4) + "px";
            };
            rightTag.style.visibility = "visible";
        }
    
        else if (showCount == 5) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-5) + "px";
            };
            rightTag.style.visibility = "visible";
        }
    
        else if (showCount == 6) {
            for(j = 0; j < juiceMenu.length; j++) {
                juiceMenu[j].style.left = 271 * (j-6) + "px";
            };
            rightTag.style.visibility = "hidden";
        }   
    });
}