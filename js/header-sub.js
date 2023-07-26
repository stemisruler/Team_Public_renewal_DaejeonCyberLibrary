let smiLI = document.getElementsByClassName('sub'),/* ul>li>ul.sub */
    hederGnb = document.querySelector('.menu'),/* gnb */
    smbg = document.querySelector('.sub-menu-bg'),/* 서브메뉴 뒷배경.(초록) */
    subMenu = document.getElementsByClassName('sub-menu');/* 서브메뉴 호버 노랑효과 */

let isDesktop = true; //width 1280이상인지 여부
let isMouseOver = false; //마우스가 메뉴 영역에 있는지

console.log(smiLI);
console.log(subMenu);
function setSubMenuHeight() { //서브메뉴 높이를 240px
    smbg.style.height = '240px';
    for (let i = 0; i < smiLI.length; i++) {
        subMenu[parseInt(i/2)].style.height = '240px';
        smiLI[i].style.height = '240px';
    }
}

function resetSubMenuHeight() {//서브메뉴 높이를 0으로 초기화
    smbg.style.height = '0';
    for (let i = 0; i < smiLI.length; i++) {
        subMenu[parseInt(i/2)].style.height = '0';
        smiLI[i].style.height = '0';
    }
}
/* 반응형일때 높이0 */
function responsiceMenu(){
    smbg.style.height = '0';
    for (let i = 0; i < smiLI.length; i++) {
        subMenu[parseInt(i/2)].style.height = '0';
        smiLI[i].style.height = '0';
    }
}
/* 반응형일때 높이 250 */
function handleMouseover() { //마우스가 영역에 들어갈때 
    if (isDesktop) {
        setSubMenuHeight();
    }
}

function handleMouseout(event) {//마우스가 영역 밖으로 나갈때
    if (isDesktop && !hederGnb.contains(event.relatedTarget)) {
        resetSubMenuHeight();
    }
}

hederGnb.addEventListener('mouseover', function (event) { //마우스 호버 
    isMouseOver = true;
    handleMouseover();
});

hederGnb.addEventListener('mouseout', function (event) {//마우스 아웃
    isMouseOver = false;
    handleMouseout(event);
});

function checkWindowSize() {//창의 크기를 확인. 1280이상인지 확인.
    let windowInner = window.innerWidth;
    if (windowInner >= 1280) {
        isDesktop = true;
        if (isMouseOver) {
            setSubMenuHeight();
        } else {
            resetSubMenuHeight();
        }
    } else { //창의 너비가 1280 미만이면 서브메뉴의 높이를 초기화
        isDesktop = false;
        resetSubMenuHeight();
    }
}

window.addEventListener('resize', checkWindowSize); 
//창 크기 변경시 checkWindowSize 호출
checkWindowSize();