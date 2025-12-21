// script.js

// 1. 캔버스 요소 가져오기
const canvas = document.getElementById('fluid-canvas');

// 2. 시뮬레이션 설정 및 생성
const simulation = new WebGLFluidEnhanced.Simulation(canvas, {
    SIM_RESOLUTION: 256,       // 해상도
    DYE_RESOLUTION: 1024,      // 색상 해상도
    DENSITY_DISSIPATION: 2,    // 잉크가 사라지는 속도 (낮을수록 오래 남음)
    VELOCITY_DISSIPATION: 0.2, // 유속 감속
    PRESSURE: 0.1,             // 압력 (낮추면 더 부드러움)
    PRESSURE_ITERATIONS: 20,   
    CURL: 30,                  // 소용돌이 강도
    SPLAT_RADIUS: 0.2,         // 마우스 움직일 때 생기는 잉크 크기
    SHADING: true,
    COLORFUL: true,            // 알록달록한 색상
    COLOR_UPDATE_SPEED: 10,
    BACK_COLOR: '#000000',     // 배경 검정
    TRANSPARENT: false,
});

// 3. 시뮬레이션 시작
simulation.start();

// 4. [핵심] 마우스 움직임 감지하여 유체 효과 발생시키기
window.addEventListener('mousemove', (e) => {
    // 마우스가 움직인 거리(힘) 계산 (movementX, movementY 사용)
    // 숫자를 곱해주면(예: * 5) 더 강력하게 터집니다.
    const forceX = e.movementX * 1; 
    const forceY = e.movementY * 1;

    // 움직임이 있을 때만 효과 발생
    if (Math.abs(forceX) > 0 || Math.abs(forceY) > 0) {
        simulation.splat(
            e.clientX,   // 현재 마우스 X 좌표
            e.clientY,   // 현재 마우스 Y 좌표
            forceX,      // X축 방향 힘 (유체가 이동할 방향)
            forceY,      // Y축 방향 힘
            null         // 색상 (null이면 랜덤 색상, '#ff0000' 처럼 지정 가능)
        );
    }
});
