// 태그 선언
const title = document.querySelectorAll(".text > h1");
const subtitle = document.querySelectorAll(".text > p");
const titleFrame = document.querySelectorAll(".text");
const backImg = document.querySelector(".back > img");
const dark = document.querySelector(".back .dark");
const main = document.querySelector(".main-frame");

const header = document.querySelectorAll(".gnb > a");
const lang = document.querySelectorAll(".lang > a");
const plus = document.querySelector(".text .plus");
const plusP = document.querySelectorAll(".plus > p");

const wrap02 = document.querySelector(".wrap02");

// 간격 유지를 위한 태그 선언
const keyword = document.querySelector(".five-keyword");
const keywordP = document.querySelectorAll(".five-keyword > p");
const ind_key = document.querySelectorAll(".promise");

// 페이지 새로고침 시 페이지 맨 위로 이동하는 이벤트입니다.
window.onload = function () {
    setTimeout(function () {
        scrollTo(0, 0);
    }, 100);
}

document.addEventListener("scroll", function() {

    // 마지막에 나올 뷰포트 상단과 일정 거리를 유지하기 위한 코드입니다.
    // newPadding이라는 새로운 변수를 선언합니다.

    const newPadding = (scrollY - 4100); 
    keyword.style.paddingTop = newPadding + "px";

    // 첫 번째 한 화면에서 진행되는 애니메이션의 스크롤 양이 4100px이기에
    // newPadding이 적용 될 첫 화면에서는 패딩값이 0이 될것입니다.
    // 그 후에 뷰포트 100%에서 기본적으로 한번 스크롤 했을 때의 양이 100이기때문에
    // 스크롤 한번 하면 패딩값이 100 두번하면 200이기때문에
    // 스크롤에 따라 태그가 뷰포트 상단과 일정거리를 유지하는 것 처럼 보입니다.
    // 위와 같이 P태그가 뷰포트상단과 일정거리를 유지하며 따라오게 하는 기능을 구현했습니다.
    
    // 다음은 스크롤 조건문을 통해 애니메이션을 작성했습니다.
    // 특별한 기능 구현없이 CSS스타일링값만 조절해주었습니다.
    // 하나하나 추가해가면서 전체적인 모양을 잡아갔습니다.
    if (600 <= scrollY && scrollY < 1200) {
        title[1].style.opacity = "1";
        title[0].style.opacity = "0";
        backImg.style.scale = "120%"
        dark.style.opacity = "0.5";

        subtitle[0].style.opacity = "0";
        subtitle[0].style.marginTop = "80px";
    }

    else if (scrollY < 600) {
        title[0].style.opacity = "1";
        title[1].style.opacity = "0";
        backImg.style.scale = "100%"
        backImg.style.opacity = "1";
        dark.style.opacity = "0";

        subtitle[0].style.opacity = "0";
        subtitle[1].style.opacity = "0";
        plus.style.opacity = "0";
    }

    else if (1200 <= scrollY && scrollY < 1800) {
        backImg.style.scale = "140%"
        dark.style.opacity = "0.8";

        title[1].style.opacity = "0";
        subtitle[0].style.opacity = "1";
        subtitle[0].style.marginTop = "0px";

        subtitle[1].style.opacity = "0";
        subtitle[1].style.marginTop = "160px";
    }

    else if (1800 <= scrollY && scrollY < 2400) {
        
        subtitle[0].style.opacity = "1";
        subtitle[1].style.opacity = "1";
        subtitle[1].style.marginTop = "80px";
        backImg.style.opacity = "1";

        for (i = 0; i < header.length; i++) {
            header[i].style.color = "white";
        }

        plus.style.opacity = "0";
        plus.style.left = "40%";
        plus.style.transition = ".2s";
        plusP[0].style.opacity = "0";
        plusP[0].style.transition = ".2s";

        lang[0].style.color = "white";
    }

    else if (2400 <= scrollY && scrollY < 3600) {
        title[0].style.opacity = "0";
        subtitle[0].style.opacity = "0";
        subtitle[1].style.opacity = "0";

        backImg.style.scale = "140%"
        backImg.style.opacity = "0.3";
        dark.style.opacity = "0";

        for (i = 0; i < header.length; i++) {
            header[i].style.color = "var(--text-color)";
        }

        lang[0].style.color = "var(--text-color)";
        lang[1].style.color = "var(--grayscale03)";

        plus.style.transform = "translateX(-50%)";
        plus.style.opacity = "1";
        plus.style.transition = ".5s";
        plus.style.transitionDelay = ".3s";
        plus.style.left = "50%";
        plusP[0].style.opacity = "1";
        plusP[0].style.transition = ".5s";
        plusP[0].style.transitionDelay = ".3s";
        main.style.opacity = "1";

        wrap02.style.opacity = "0";
        wrap02.style.margin = "100px auto 0 auto"
    }
    
    // 여기서부터 기본적인 챕터 1의 페이지가 끝나고
    // 두번째 챕터가 시작됩니다.
        
    else if (3600 <= scrollY && scrollY < 4700) {
        main.style.opacity = "0";
        wrap02.style.opacity = "1"
        wrap02.style.margin = "0 auto 0 auto"

        ind_key[0].style.opacity = "1";
        ind_key[1].style.opacity = "0";
        ind_key[1].style.paddingTop = "50px";

        keywordP[0].innerHTML = "엄격을"
        // 처음에 작성해두었던 스크롤에 따라 움직이는 태그의 내용을 바꿔줌으로써
        // 특정 영역에 해당되면 글자가 바뀝니다.
    }  
    
    else if (4500 <= scrollY && scrollY < 5300) {
        ind_key[1].style.opacity = "1";
        ind_key[1].style.paddingTop = "0px";

        ind_key[2].style.opacity = "0";
        ind_key[2].style.paddingTop = "50px";

        keywordP[0].innerHTML = "정직을"
    } 
    
    else if (5300 <= scrollY && scrollY < 6100) {
        ind_key[2].style.opacity = "1";
        ind_key[2].style.paddingTop = "0px";

        ind_key[3].style.opacity = "0";
        ind_key[3].style.paddingTop = "50px";

        keywordP[0].innerHTML = "새로움을"
    }    

    else if (6100 <= scrollY && scrollY < 7000) {
        ind_key[3].style.opacity = "1";
        ind_key[3].style.paddingTop = "0px";

        ind_key[4].style.opacity = "0";
        ind_key[4].style.paddingTop = "50px";

        keywordP[0].innerHTML = "존중을"
    } 

    else if (7000 <= scrollY) {
        ind_key[4].style.opacity = "1";
        ind_key[4].style.paddingTop = "0px";

        keywordP[0].innerHTML = "즐거움을"
        keyword.style.paddingTop = "3200px";
    } 
});