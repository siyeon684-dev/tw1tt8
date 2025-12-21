// WebGL Fluid Enhanced 라이브러리 불러오기 (CDN)
import webGLFluidEnhanced from 'https://cdn.jsdelivr.net/npm/webgl-fluid-enhanced@latest/+esm';

// 캔버스 요소 선택
const canvas = document.getElementById('fluid-canvas');

// 시뮬레이션 시작
webGLFluidEnhanced.simulation(canvas, {
    // 옵션 설정 (원하는 대로 조절 가능)
    SIM_RESOLUTION: 256,       // 해상도 (128 or 256 추천)
    DYE_RESOLUTION: 1024,      // 색상 해상도
    DENSITY_DISSIPATION: 2,    // 잔상이 사라지는 속도 (낮을수록 오래 남음)
    VELOCITY_DISSIPATION: 0.2, // 유체 속도가 느려지는 정도
    PRESSURE: 0.5,             // 압력
    PRESSURE_ITERATIONS: 20,   // 품질
    CURL: 30,                  // 꼬임 정도 (소용돌이)
    SPLAT_RADIUS: 0.35,        // 클릭 시 퍼지는 크기
    SHADING: true,             // 쉐이딩 효과 (입체감)
    COLORFUL: true,            // 알록달록한 색상 사용
    COLOR_UPDATE_SPEED: 10,    // 색상 변화 속도
    BACK_COLOR: '#000000',     // 배경색 (검정)
    TRANSPARENT: false,        // 투명 배경 여부
});

// [옵션] 꽃잎 효과가 유체 효과와 겹쳐서 지저분할 수 있어 제거했습니다.
// 만약 꽃잎도 같이 원하시면 이전에 드린 꽃잎 코드를 여기에 추가하시면 됩니다.
