/* 1. Unicorn Studio 초기화 스크립트 */
!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

/* 2. 검은 꽃잎 생성 스크립트 */
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // 랜덤 위치
    petal.style.left = Math.random() * 100 + 'vw';
    
    // 랜덤 크기
    const size = Math.random() * 10 + 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // 랜덤 속도
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    
    // 랜덤 딜레이
    petal.style.animationDelay = Math.random() * 5 + 's';

    document.body.appendChild(petal);

    // 10초 뒤 삭제 (메모리 관리)
    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// 0.3초마다 꽃잎 생성
setInterval(createPetal, 300);