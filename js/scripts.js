

let seqImg = 0;
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".images")
const imagesItem = document.querySelector(".modal-gallery-item-img")
const toastMsg = document.getElementById('toast-msg');

let arr = [
    "assets/photo/picture.png",
    "assets/photo/picture.png",
    "assets/photo/picture.png",

//    "assets/photo/M04_03_GHO_1879-1.jpg",
    "assets/photo/picture.png",
    "assets/photo/picture.png",
    "assets/photo/picture.png",

//    "assets/photo/M08_11_GHO_0630-1.jpg",
    "assets/photo/picture.png",
    "assets/photo/picture.png",
    "assets/photo/picture.png",

    "assets/photo/picture.png",
//    "assets/photo/M10_19_GHO_2461-1.jpg",
    "assets/photo/picture.png",
    "assets/photo/picture.png",
//    "assets/photo/M15_GHO_2543.jpg",

    "assets/photo/picture.png",
    "assets/photo/picture.png",
    "assets/photo/picture.png",
//    "assets/photo/M19_24_GHO_1202-1.jpg"

];

//let url = location.href;
let url = "https://eunoia3.github.io/joeunDay/";

let weddingDay = "2025. 04. 12 (토) 오후 12:20";
let weddingHallName = "더 리버사이드 호텔 노벨라홀 (LLF층)";
let weddingHallAddress = "서울 서초구 강남대로 107길 6";
let weddingHallNum = "02-6710-1188";

let groomName = "임태주";
let groomNameFirst = "태주";
// let groomPhoneNum = ${secrets.GROOM_PHONE_NUM};
let groomPhoneNum = "01000002222";

let groomBank = "우리은행";
let groomAccount = "123456-1234567";

let groomDadName = "임채훈";
let groomDadBank = "AA은행";
let groomDadAccount = "123456-1234568";

let groomMomName = "황가현";
let groomMomBank = "AA은행";
let groomMomAccount = "123456-1234569";

let brideName = "정서우";
let brideNameFirst = "서우";
let bridePhoneNum = "01011110000";

let brideBank = "AA은행";
let brideAccount = "123456-1234561";

let brideDadName = "정태상";
let brideDadBank = "AA은행";
let brideDadAccount = "123456-1234562";

let brideMomName = "서일원";
let brideMomBank = "AA은행";
let brideMomAccount = "123456-1234563";

const removeSuffix = (str, suffix) => str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;

// Example usage
let ptoken = "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AAA";
let updatedToken = removeSuffix(ptoken, "AAA");

window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
/*
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })
*/

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })

    
    

    // 신랑신부 init
    initGroomBride();

    // 웨딩 데이, 웨딩홀 init
    initWeddingHall();

    // 갤러리 init
    initGallery();

    // 갤러리 아이템 모달 이전, 다음 버튼 init
    initModalBtn();

    // 마음 전하실 곳 init
    initSendAccount();


})

function kakaoinit(key){
    Kakao.init(key.substring(0,32));
    console.log("Kakao :: "+Kakao.isInitialized());
}


function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};


function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


/** 신랑신부 init **/
function initGroomBride() {
    document.querySelector("#profile-img-groom").src = "assets/photo/groom.png";
    document.querySelector("#groom-name-p").innerHTML = groomName+" 💕";
    document.querySelector("#groom-name-first-p").innerHTML = groomNameFirst;
    //document.querySelector("#groom-parent-p").innerHTML = groomDadName+" • "+groomMomName+"\u00a0";

    document.querySelector("#profile-img-bride").src = "assets/photo/bride.png";
    document.querySelector("#bride-name-p").innerHTML = brideName+" 💕";
    document.querySelector("#bride-name-first-p").innerHTML = brideNameFirst;
    document.querySelector("#bride-parent-p").innerHTML = brideDadName+" • "+brideMomName+"\u00a0";

    document.querySelector("#couple-thank-u-p").innerHTML = groomNameFirst+" & "+brideNameFirst;
}


/** 웨딩 데이, 웨딩홀 init **/
function initWeddingHall() {
    document.querySelector("#date-wedding-p").innerHTML = weddingDay;
    document.querySelector("#name-date-wedding-hall-p").innerHTML = weddingHallName;

    //document.querySelector("#name-wedding-hall-p").innerHTML = weddingHallName;

    //document.querySelector("#address-wedding-hall-p").innerHTML = weddingHallAddress;
    //document.querySelector("#phone-wedding-hall-p").innerHTML = weddingHallNum;
}


/** 갤러리 init **/
/**
function initGallery() {
    document.querySelector("#gallery-item-0").src = arr[0];
    document.querySelector("#gallery-item-1").src = arr[1];
    document.querySelector("#gallery-item-2").src = arr[2];
    document.querySelector("#gallery-item-3").src = arr[3];
    document.querySelector("#gallery-item-4").src = arr[4];
    document.querySelector("#gallery-item-5").src = arr[5];
    document.querySelector("#gallery-item-6").src = arr[6];
    document.querySelector("#gallery-item-7").src = arr[7];
    document.querySelector("#gallery-item-8").src = arr[8];
    document.querySelector("#gallery-item-9").src = arr[9];
    document.querySelector("#gallery-item-10").src = arr[10];
    document.querySelector("#gallery-item-11").src = arr[11];
    document.querySelector("#gallery-item-12").src = arr[12];
    document.querySelector("#gallery-item-13").src = arr[13];
    document.querySelector("#gallery-item-14").src = arr[14];
//    document.querySelector("#gallery-item-15").src = arr[15];
//    document.querySelector("#gallery-item-16").src = arr[16];
//    document.querySelector("#gallery-item-17").src = arr[17];
}
**/


/** 갤러리 아이템 모달 띄우기 **/
/**
function showGalleryItem(seq) {
    seqImg = seq;
    imagesItem.src = arr[seqImg];

    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    initModalBtn();
}
*/


/** 갤러리 아이템 모달 닫기 **/
/**
function closeGalleryItem(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
*/

/** 갤러리 아이템 모달 이전으로 버튼 **/
/**
function prev(){
    seqImg = seqImg -1;
    imagesItem.src = arr[seqImg];

    initModalBtn();
}
*/


/** 갤러리 아이템 모달 다음으로 버튼 **/
/**
function next(){
    seqImg = seqImg +1;
    imagesItem.src = arr[seqImg];

    initModalBtn();
}
*/

/** 갤러리 아이템 모달 이전, 다음 버튼 init **/
/**
function initModalBtn() {

    // 첫 사진은 prev 버튼 안보이게
    if(seqImg == 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    // 마지막 사진은 next 버튼 안보이게
    if(seqImg == (arr.length-1)) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }

}
*/

/**
 function initTab(tab_id) {
    
 if(tab_id == "tab-1") {
    document.querySelector("#tab-2").classList.remove('current');
    document.querySelector("#tab-02").classList.remove('current');
    
    document.querySelector("#tab-1").classList.add('current');
    document.querySelector("#tab-01").classList.add('current');
}

if(tab_id == "tab-2") {
    document.querySelector("#tab-1").classList.remove('current');
    document.querySelector("#tab-01").classList.remove('current');
    
    document.querySelector("#tab-2").classList.add('current');
    document.querySelector("#tab-02").classList.add('current');
}

}
*/


/** 마음 전하실 곳 init **/
function initSendAccount() {
    document.querySelector("#groom-name-send").innerHTML = groomName;
    document.querySelector("#groom-bank-send").innerHTML = groomBank;
    document.querySelector("#groom-account-send").innerHTML = groomAccount;

    document.querySelector("#groom-dad-name-send").innerHTML = groomDadName;
    document.querySelector("#groom-dad-bank-send").innerHTML = groomDadBank;
    document.querySelector("#groom-dad-account-send").innerHTML = groomDadAccount;

    document.querySelector("#groom-mom-name-send").innerHTML = groomMomName;
    document.querySelector("#groom-mom-bank-send").innerHTML = groomMomBank;
    document.querySelector("#groom-mom-account-send").innerHTML = groomMomAccount;

    document.querySelector("#bride-name-send").innerHTML = brideName;
    document.querySelector("#bride-bank-send").innerHTML = brideBank;
    document.querySelector("#bride-account-send").innerHTML = brideAccount;

    document.querySelector("#bride-dad-name-send").innerHTML = brideDadName;
    document.querySelector("#bride-dad-bank-send").innerHTML = brideDadBank;
    document.querySelector("#bride-dad-account-send").innerHTML = brideDadAccount;

    document.querySelector("#bride-mom-name-send").innerHTML = brideMomName;
    document.querySelector("#bride-mom-bank-send").innerHTML = brideMomBank;
    document.querySelector("#bride-mom-account-send").innerHTML = brideMomAccount;
}


/** 전화걸기 **/
function phoneCall(num) {
    var phoneNum = num.replaceAll("-", "");
    location.href = "tel:" + phoneNum;
}


/** 텍스트 복사하기 **/
function copyClipboard(textContent) {
    window.navigator.clipboard.writeText(textContent).then(() => {
        showToastMsg("복사완료");
      });
}


/** 토스트 메세지 띄우기 **/
function showToastMsg(text){
    toastMsg.textContent = text;
    toastMsg.classList.add('active');
    setTimeout(function(){
        toastMsg.classList.remove('active');
    },1000);
}



/** 카카오톡 공유하기 **/
function shareKakao() {

/*
    Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: 'jo🩷eun day!',
            description: '2025.04.12 (토) 오후 12:20\n더 리버사이드 호텔 노벨라홀',
            imageUrl:
              'https://eunoia3.github.io/joeunDay/assets/photo/thumbnail_M12_17_GHO_2118-1.jpg',
            link: {
              // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                mobileWebUrl: url,
                webUrl: url,
            },
          },
//          social: {
//            likeCount: 286,
//            commentCount: 45,
//            sharedCount: 845,
//          },
          buttons: [
            {
              title: '청첩장 보러가기',
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
          ],
        });
*/
    Kakao.Share.sendCustom({
        templateId: 114610,
          templateArgs: {
            title: 'jo🩷eun day!',
            description: '2025.04.12 (토) 오후 12:20\n더 리버사이드 호텔 노벨라홀',
          },
        });
}
