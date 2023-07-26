const areas = document.querySelectorAll(".lib-area");
// "area" 클래스를 가진 모든 요소를 선택합니다.


// 각 "area" 요소에 대해, 마우스가 위로 이동할 때마다 이벤트 리스너를 추가합니다.
for (const area of areas) {
  area.addEventListener("mouseover", (event) => {
    // 이벤트가 발생한 요소의 "data-image" 속성 값을 가져옵니다.
    const image = event.target.getAttribute("data-image");
    // 이 이미지를 사용하여 배경을 변경합니다.
    changeBackground(image);
  });
}

// 각 "area" 요소에 대해, 마우스가 위로 이동할 때마다 이벤트 리스너를 추가합니다.
for (const area of areas) {
  area.addEventListener("mouseover", (event) => {
    // 이벤트가 발생한 요소 또는 가장 가까운 조상 요소 중 .lib-area 클래스를 가진 요소를 가져옵니다.
    const targetArea = event.target.closest('.lib-area');
    // 이 요소의 "data-image" 속성 값을 가져옵니다.
    const image = targetArea.getAttribute("data-image");
    // 이 이미지를 사용하여 배경을 변경합니다.
    changeBackground(image);
  });
}

function changeBackground(image) {
  const section04 = document.querySelector(".section04");
  section04.style.background = `url('${image}') no-repeat center center / cover`;
}


/* 
1. `for`문: 이 코드에서 `for`문은 모든 ".lib-area" 요소에 대해 마우스 오버 이벤트 리스너를 추가하는 역할을 합니다.

    `for (const area of areas)`는 "lib-area" 클래스를 가진 각 요소를 반복하는데, `area`라는 변수는 현재 반복 중인 요소를 참조합니다. 

    `area.addEventListener("mouseover", (event) => {...})`는 이 `area` 요소에 "mouseover" 이벤트(즉, 마우스가 해당 요소 위로 올라갔을 때)가 발생하면 실행되는 함수를 등록합니다.

    이 함수 내에서는 먼저 `event.target.closest('.lib-area')`를 통해 이벤트가 발생한 요소 또는 그 가장 가까운 조상 요소 중 ".lib-area" 클래스를 가진 요소를 선택합니다.

    그리고 `const image = targetArea.getAttribute("data-image")`를 통해 해당 요소의 "data-image" 속성 값을 가져옵니다. 이 값은 각 요소의 배경 이미지 URL을 저장하는 데 사용됩니다.

    마지막으로 `changeBackground(image)`를 호출하여 배경 이미지를 변경합니다.


    (for문으로 바꿨을 때 바뀌는 건 코드 첫줄) for (let i = 0; i < areas.length; i++) {
    
    for문보다 for of가 더 좋은 점

    코드 가독성: for...of 루프는 for 루프보다 간결하고 명확합니다. for...of 루프에서는 배열의 길이를 신경 쓸 필요가 없고, 
    각 요소를 직접 조작할 수 있습니다. 반면 for 루프에서는 배열의 길이를 계산하고 인덱스를 통해 각 요소에 접근해야 합니다.

    인덱스: for 루프에서는 명시적으로 인덱스(i)를 사용하여 배열의 각 요소에 접근합니다. 이는 인덱스를 기반으로 복잡한 연산을 수행해야 하는 경우 유용합니다. 
    반면 for...of 루프에서는 배열의 각 요소를 직접 순회합니다.

2. `changeBackground` 함수: 이 함수는 전달받은 이미지 URL을 사용하여 섹션의 배경 이미지를 변경합니다.

    `const section04 = document.querySelector(".section04")`를 통해 ".section04" 클래스를 가진 요소를 선택합니다. 이 요소가 배경 이미지를 변경할 섹션입니다.

    `section04.style.background = `url('${image}') no-repeat center center / cover``를 통해 이 섹션의 배경 스타일을 설정합니다. `url('${image}')`는 전달받은 이미지 URL을 사용하고, `no-repeat center center / cover`는 배경 이미지가 반복되지 않고, 중앙에 위치하며, 섹션을 완전히 덮도록 설정합니다.

이런 식으로, 이 JavaScript 코드는 각 ".lib-area" 요소에 마우스를 올리면 해당 요소의 "data-image" 속성에 저장된 이미지로 섹션의 배경을 변경하는 기능을 제공합니다. 
*/

/* 아래 코드는 만약 나중에 자세히 보기가 사라진 lib area에서
lib area를 클릭하면 자세히보기로 연결되는 링크로 갈 수 있게 만들어주는 js 코드.
html쪽에서, 각 lib area가 지정하는 data url에 자세히 보기와 연결된 링크를 넣어서

반응형 때 자세히 보기 버튼이 없어도 자세히 보기가 연결하는 링크로 이동할 수 있다.

// 모든 'lib-area' 요소를 선택합니다.
let libAreas = document.querySelectorAll('.lib-area');

// 각 'lib-area' 요소에 이벤트 리스너를 추가합니다.
libAreas.forEach(libArea => {
    libArea.addEventListener('click', () => {
        // data- 속성에 저장된 웹사이트 주소를 얻습니다.
        let websiteUrl = libArea.getAttribute('data-url');

        // 해당 웹사이트로 이동합니다.
        window.location.href = websiteUrl;
    });
});

<div class="lib-area" data-image="img/section04-library-img/01-dadeok-ansan-lib.png" 
data-url="https://example1.com">

 */