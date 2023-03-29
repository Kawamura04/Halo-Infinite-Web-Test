// ローディングからの画面処理

const loadingVideo = document.querySelector('#video');

window.addEventListener('load', () => {
    loadingVideo.animate(
        {
            opacity: [1 ,0],
            visibility: 'hidden',
        },
        {
            duration: 3000,
            delay: 1500,
            easing: 'ease',
            fill : 'forwards',
        }
    );
});
