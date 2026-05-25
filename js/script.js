const body = document.body;

function handleScroll() {
    if (window.scrollY > 70) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

console.log('EVO loaded');