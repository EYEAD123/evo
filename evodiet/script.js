const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeDrawer = document.getElementById('closeDrawer');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('drawerBackdrop');

function toggleMenu() {
    mobileMenu.classList.toggle('open');
    backdrop.classList.toggle('open');
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMenu);
if (closeDrawer) closeDrawer.addEventListener('click', toggleMenu);
if (backdrop) backdrop.addEventListener('click', toggleMenu);

// غلق القائمة عند الضغط على الروابط
document.querySelectorAll('.drawer-content a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});