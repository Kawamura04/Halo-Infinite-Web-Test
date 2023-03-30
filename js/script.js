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


const navItems = document.querySelectorAll('.page-header li');

navItems.forEach((navItem, index) => {
    // console.log(`${index}番目のリスト`);
    navItem.animate(
        {
            opacity: [0 ,1],
            // translate: ['2rem', 0],
        },
        {
            duration: 2400,
            delay: 1000 * index,
            easing: 'ease-in',
            fill: 'forwards',
        }
    );
});