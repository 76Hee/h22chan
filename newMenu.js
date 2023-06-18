// New01
const New01_Images = document.querySelectorAll('#new01-img > img');
const New01_text = document.querySelector('#new01-info');

// New02
const New02_Images = document.querySelectorAll('#new02-img > img');
const New02_text = document.querySelector('#new02-info');

// New03
const New03_Images = document.querySelectorAll('#new03-img > img');
const New03_text = document.querySelector('#new03-info');

var once_new01 = false;
var once_new02 = false;
var once_new03 = false;
var time_new01 = 30;
var time_new02 = 30;
var time_new03 = 30;
var countNum_new01 = 0;
var countNum_new02 = 0;
var countNum_new03 = 0;

document.addEventListener("scroll", function () {
    console.log(scrollY)
    console.log(startAni_new03);

    if (1100 <= scrollY && scrollY < 1900) {
        New01_text.style.opacity = "1";
        New01_text.style.marginTop = "109px";
        New02_text.style.opacity = "0";
        New02_text.style.marginTop = "150px";
        
        if (!once_new01) {
            once_new01 = true;
            startAni_new01();

            function startAni_new01() {
                setInterval(increaseFrame_new01, time_new01); 
            }

            function increaseFrame_new01() {
                countNum_new01++

                if (countNum_new01 > New01_Images.length) {
                    countNum_new01 = 25; 
                }

                showImage_new01(countNum_new01);
            }

            function showImage_new01(frame) {

                for (i = 0; i < New01_Images.length; i++) {
                    if (i == frame) {
                        New01_Images[i].style.opacity = 1;
                    }
                        
                    else {
                        New01_Images[i].style.opacity = 0;
                    }
                }

                if (frame == 25) {
                    New01_Images[24].style.opacity = 1;
                }
            } 
        }
    }

    else if (scrollY < 1100) {
        New01_text.style.opacity = "0";
        New01_text.style.marginTop = "150px";
    }
        
    else if (1900 <= scrollY && scrollY < 2600) {
        New02_text.style.opacity = "1";
        New02_text.style.marginTop = "109px";
        New03_text.style.opacity = "0";
        New03_text.style.marginTop = "150px";

        if (!once_new02) {
            
            once_new02 = true;
            startAni_new02();

            function startAni_new02() {
                setInterval(increaseFrame_new02, time_new02); 
            }

            function increaseFrame_new02() {
                countNum_new02++

                if (countNum_new02 > New02_Images.length) {
                    countNum_new02 = 25; 
                }

                showImage_new02(countNum_new02);
            }

            function showImage_new02(frame) {

                for (i = 0; i < New02_Images.length; i++) {
                    if (i == frame) {
                        New02_Images[i].style.opacity = 1;
                    }
                        
                    else {
                        New02_Images[i].style.opacity = 0;
                    }
                }

                if (frame == 25) {
                    New02_Images[24].style.opacity = 1;
                }
            } 
        }
    }

    else if (2600 <= scrollY && scrollY < 4000)  {
        New03_text.style.opacity = "1";
        New03_text.style.marginTop = "109px";
        

        if (!once_new03) {

            once_new03 = true;
            startAni_new03();

            function startAni_new03() {
                setInterval(increaseFrame_new03, time_new03); 
            }

            function increaseFrame_new03() {
                countNum_new03++;

                if (countNum_new03 > New03_Images.length) {
                    countNum_new03 = 25; 
                }

                showImage_new03(countNum_new03);
            }

            function showImage_new03(frame) {

                for (i = 0; i < New03_Images.length; i++) {
                    if (i == frame) {
                        New03_Images[i].style.opacity = 1;
                    }
                        
                    else {
                        New03_Images[i].style.opacity = 0;
                    }
                }

                if (frame == 25) {
                    New03_Images[24].style.opacity = 1;
                }
            } 
        }
    }
});