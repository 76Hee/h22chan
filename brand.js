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
const keyword = document.querySelector(".five-keyword");
const keywordP = document.querySelectorAll(".five-keyword > p");
const ind_key = document.querySelectorAll(".promise");

window.onload = function () {
    setTimeout(function () {
        scrollTo(0, 0);
    }, 100);
}

document.addEventListener("scroll", function() {

    const newPadding = (scrollY - 4100);
    keyword.style.paddingTop = newPadding + "px";

    console.log(scrollY);
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
        dark.style.opacity = "0";
        backImg.style.opacity = "1";

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
        
    else if (3600 <= scrollY && scrollY < 4700) {
        main.style.opacity = "0";
        wrap02.style.opacity = "1"
        wrap02.style.margin = "0 auto 0 auto"

        ind_key[0].style.opacity = "1";
        ind_key[1].style.opacity = "0";
        ind_key[1].style.paddingTop = "50px";
        keywordP[0].innerHTML = "엄격을"
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