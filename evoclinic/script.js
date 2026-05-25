// كود البرجر منيو
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.onclick = function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    };

    // قفل المنيو لما تضغط على أي لينك جواها
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.onclick = function() {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        };
    });
}