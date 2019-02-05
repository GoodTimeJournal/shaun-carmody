const arrow = document.getElementsByClassName('arrow')[0];
const nav = document.getElementsByClassName('menu-nav')[0];
arrow.addEventListener('click', (e) => {
    console.log(nav.style);
    if (Array.from(arrow.classList).includes('arrow-down')) {
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
        nav.style.display = 'flex';
    } else if (Array.from(arrow.classList).includes('arrow-up')) {
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
        nav.style.display = 'none';
    }
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 800) nav.style.display = 'inline-block';
    if (window.innerWidth < 800) {
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
        nav.style.display = 'none';
    }
});