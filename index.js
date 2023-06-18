//contents02_scroll show
const contents02Tag = document.querySelector(".wrap02 .contents-frame");

const juiceTabs = document.querySelectorAll(".juice-tab");
const selectedBar = document.querySelector(".choice-bar > .selected")

const menuName = document.querySelectorAll(".juice-menu .menu-title")
const menuImage = document.querySelectorAll(".juice-img > img")

const juiceMenu = document.querySelectorAll(".juice-menu");
const leftTag = document.querySelector(".left-arrow");
const rightTag = document.querySelector(".right-arrow");

//contents03
const contents03Tag = document.querySelector(".wrap03 .contents-frame");
const new01_pTag =document.querySelector(".newMenu-frame > p:nth-child(2)")
const new02_pTag =document.querySelector(".newMenu-frame > p:nth-child(4)")
const new03_pTag = document.querySelector(".newMenu-frame > p:nth-child(6)")

//grid
const GridItem = document.querySelectorAll(".grid-container .grid")


juiceList_Click(); //음료 리스트 선택바 이동 함수

Default_Show(); //기본 각 음료 리스트 위치 선정 함수
MilkTea_ClickBtn(); //좌우 버튼 눌렀을 때 음료이미지 변경 함수

document.addEventListener("scroll", function () {
    console.log(scrollY);

    if (500 <= scrollY && scrollY < 1300) {
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
        contents02Tag.style.paddingTop = "100px";
        contents02Tag.style.opacity = "0";
    }
    
    else if (1300 <= scrollY && scrollY < 2300) {
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

        GridItem[0].style.left = "-20%";
        GridItem[0].style.opacity = "0";
        GridItem[1].style.top = "-40%";
        GridItem[1].style.opacity = "0";
        GridItem[2].style.left = "30%";
        GridItem[2].style.opacity = "0";
        GridItem[3].style.top = "30%";
        GridItem[3].style.opacity = "0";
        GridItem[4].style.top = "40%";
        GridItem[4].style.opacity = "0";
    }

    else if (2300 <= scrollY) {
        GridItem[0].style.left = "0px";
        GridItem[0].style.opacity = "1";
        GridItem[1].style.top = "0px";
        GridItem[1].style.opacity = "1";
        GridItem[2].style.left = "0px";
        GridItem[2].style.opacity = "1";
        GridItem[3].style.top = "0px";
        GridItem[3].style.opacity = "1";
        GridItem[4].style.top = "0px";
        GridItem[4].style.opacity = "1";
    }
});



// ------------- function -----------------------
function juiceList_Click() {
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

function Default_Show() {
    for(i=0; i < juiceMenu.length; i++) {
        juiceMenu[i].style.left = 271 * i + "px";
    }
}

function MilkTea_ClickBtn() {

    var showCount = 0;

    rightTag.addEventListener("click", function() {
        showCount++;
    
        if (showCount == 1) {
            for(j = 0; j < juiceMenu.length; j++) {
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
    
            showCount == 6;
            rightTag.style.visibility = "hidden";
            
        } 
        console.log(showCount);
    });
    
    leftTag.addEventListener("click", function() {
        showCount--;
    
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
        console.log(showCount);
    });
}