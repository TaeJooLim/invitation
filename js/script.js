// Swiper 초기화
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    speed: 700,
    mousewheel: true,
});

// 계좌 토글
function toggleAcc(id) {
    const content = document.getElementById(id);
    const isVisible = content.style.display === 'block';

    document.querySelectorAll('.acc-content').forEach(el => el.style.display = 'none');

    content.style.display = isVisible ? 'none' : 'block';
}

// 복사
function copy(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('계좌번호가 복사되었습니다.');
    });
}