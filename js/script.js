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

// 공유하기 (모바일 기본 공유 시트)
const SHARE_URL = 'https://taejoolim.github.io/invitation/';

async function shareInvitation() {
    const data = {
        title: '임태주 ❤️ 정서우 결혼합니다',
        text: '2026.11.28 (토) 오전 10:00',
        url: SHARE_URL,
    };

    if (navigator.share) {
        try {
            await navigator.share(data);
        } catch (e) {
            // 사용자가 공유 창을 닫은 경우는 무시
            if (e.name !== 'AbortError') copyLink();
        }
    } else {
        // Web Share API를 지원하지 않는 환경(PC 등)에서는 링크 복사
        copyLink();
    }
}

function copyLink() {
    navigator.clipboard.writeText(SHARE_URL).then(() => {
        alert('청첩장 링크가 복사되었습니다.');
    });
}
