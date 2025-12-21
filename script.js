// script.js 전체 코드

// HTML에서 불러온 라이브러리가 'WebGLFluidEnhanced'라는 이름으로 준비되어 있습니다.
const canvas = document.getElementById('fluid-canvas');

// 시뮬레이션 실행
const simulation = new WebGLFluidEnhanced.Simulation(canvas, {
    SIM_RESOLUTION: 256,
    DYE_RESOLUTION: 1024,
    DENSITY_DISSIPATION: 2,
    VELOCITY_DISSIPATION: 0.2,
    PRESSURE: 0.5,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.35,
    SHADING: true,
    COLORFUL: true,
    COLOR_UPDATE_SPEED: 10,
    BACK_COLOR: '#000000',
    TRANSPARENT: false,
});

// 시작
simulation.start();
