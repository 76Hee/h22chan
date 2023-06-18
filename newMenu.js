// 첫번째 신메뉴 태그 선언
const New01_Images = document.querySelectorAll('#new01-img > img');
const New01_text = document.querySelector('#new01-info');

// 두번째 신메뉴 태그 선언
const New02_Images = document.querySelectorAll('#new02-img > img');
const New02_text = document.querySelector('#new02-info');

// 세번째 신메뉴 태그 선언
const New03_Images = document.querySelectorAll('#new03-img > img');
const New03_text = document.querySelector('#new03-info');

// 각각의 인터렉션을 제어하기 위한 변수 선언
var once_new01 = false; // 이벤트가 한번만 발생하도록 제어하기 위한 변수
var once_new02 = false;
var once_new03 = false;

var time_new01 = 30; // 이미지 변경 시 30ms의 간격을 두기 위한 변수
var time_new02 = 30;
var time_new03 = 30;

var countNum_new01 = 0; // 이미지를 프레임별로 제어하기 위한 변수
var countNum_new02 = 0;
var countNum_new03 = 0;

// Event 01 모든 인터랙션은 스크롤 됐을때로부터 시작됩니다.
document.addEventListener("scroll", function () {

    // 만약 스크롤이 1100에서 1900사이에 위치한다면
    if (1100 <= scrollY && scrollY < 1900) {

        // 간단한 css속성 변경입니다.
        New01_text.style.opacity = "1";
        New01_text.style.marginTop = "109px";
        New02_text.style.opacity = "0";
        New02_text.style.marginTop = "150px";
        
        // 조건문을 실행시킵니다.
        
        if (!once_new01) { // once_new01이 false이면 실행됩니다.

            //한번 실행시키기 위해 조건문이 실행되면 once_new01값을 true 선언해줍니다.
            // 이렇게 되면 스크롤을 다시 내려도 true로 값이 저장된 once_new01은 실행되지 않습니다.
            once_new01 = true;

            // 정상적으로 조건문이 시작되면 startAni_new01이라는 함수를 실행시킵니다.
            startAni_new01();

            // startAni_new01이라는 함수는 ncreaseFrame_new01라는 함수를 time_new01만큼 반복하게 됩니다.
            function startAni_new01() {
                setInterval(increaseFrame_new01, time_new01); 
            }

            // 위의 increaseFrame_new01의 함수는 다음과 같습니다.
            function increaseFrame_new01() {
                countNum_new01++ // CountNum_new의 값을 1씩 증가시킵니다.

                // 만약 count숫자가 변경될 이미지의 길이를 넘게 된다면 count숫자를 25로 선언해줍니다.
                // 이는 후에 모든 이미지가 변경되고 마지막 프레임의 이미지가 남아있도록 하기 위함입니다.
                if (countNum_new01 > New01_Images.length) {
                    countNum_new01 = 25; 
                }

                // 그렇게 증가한 countNum_new01의 값을 showImage_new01의 매개변수로 지정해줍니다.
                showImage_new01(countNum_new01);
            }

            // showImage_new01 함수는 아래와 같습니다.
            // 위에서 받아왔던 countNum_new01의 변수를 frame으로 바꿔 지정해줍니다.
            function showImage_new01(frame) {

                // 이제 받아온 frame값을 통해 반복문을 실행시킵니다.
                
                // 만약 첫번째 이미지의 인덱스 값과 frame값이 같다면 이미지를 보여주고
                // 아니라면 숨깁니다.

                // 구체적으로 처음 실행되면 countNum는 1이되고 이 함수의 frame값이 1이됩니다.
                // 그때 1의 값을 이미지의 인덱스 번호 전체와 같은지 다른지 여부를 검사합니다.
                // 이렇게 되면 첫번째 이미지가 보여지고 함수는 종료됩니다.
                
                // 아까 startAni라는 함수에서 30ms간격을 두고 반복하라고 했으니
                // 다시 함수가 재실행되며 이번에는 countNum의 값이 2가 되고
                // 그 2의 값을 frame값으로 받아오며 다시 이미지의 인덱스 번호 전체와 같은지 다른지의 여부를 검사합니다.

                // 이렇게 모든 이미지의 개수만큼 반복하게 됩니다.
                // 처음에는 ForEach구문을 통해 제작했으나 마지막 이미지가 멈춰있지 않고
                // 깜빡이는 문제가 생겼었는데 이는 forEach구문은 반복할 구간을 정하지 못한다는 단점이 있었기 떄문이였습니다.
                // 따라서 반복할 구간을 정할 수 있는 for구문을 통해 구현했습니다.
                for (i = 0; i < New01_Images.length; i++) {
                    if (i == frame) {
                        New01_Images[i].style.opacity = 1;
                    }
                        
                    else {
                        New01_Images[i].style.opacity = 0;
                    }
                }

                // 위에서 만약 countNum_new01이 이미지의 개수보다 길어지면
                // 모든 이미지를 반복했다는 것을 의미하기에 그렇게되면
                // 마지막 이미지를 고정시킵니다.
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

        // 위에서 진행했던 함수와 같은 함수입니다.
        // 똑같은 원리이기때문에 설명은 생략하겠습니다.
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
        
        // 위에서 진행했던 함수와 같은 함수입니다.
        // 똑같은 원리이기때문에 설명은 생략하겠습니다.
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