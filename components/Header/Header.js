const header = {
    element: document.getElementsByClassName('main-header')[0],
    icon: document.getElementsByClassName('arrow')[0],
    nav: document.getElementsByClassName('menu-nav')[0],
    links: Array.from(document.querySelectorAll('.quick-link')),
}

header.displayMenu = () => {
    header.icon.classList.remove('arrow-down');
    header.icon.classList.add('arrow-up');
    header.nav.style.display = 'flex';
}

header.hideMenu = () => {
    header.icon.classList.remove('arrow-up');
    header.icon.classList.add('arrow-down');
    header.nav.style.display = 'none';
}

header.icon.addEventListener('click', (e) => {
    if (Array.from(header.icon.classList).includes('arrow-down')) {
        header.displayMenu();
    } else if (Array.from(header.icon.classList).includes('arrow-up')) {
        header.hideMenu();
    }
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 800) header.nav.style.display = 'inline-block';
    if (window.innerWidth < 800) {
        header.hideMenu();
    }
});

header.scroll = (e) => {
    e.preventDefault();
    const id = document.getElementById(e.target.dataset.id);
    const offset = header.element.clientHeight + header.nav.clientHeight;
    const scroll = id.offsetTop - offset;
    TweenLite.to(window, 2, {scrollTo:scroll});
}

header.links.map(el => el.addEventListener('click', header.scroll));