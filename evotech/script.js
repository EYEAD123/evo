document.addEventListener("DOMContentLoaded", () => {
    // 1. منطق الهمبرجر منيو
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.onclick = function(e) {
            e.stopPropagation();
            this.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        };

        document.addEventListener("click", (e) => {
            if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove("active");
                mobileMenu.classList.remove("active");
            }
        });
    }

    // 2. داتا المحتوى
    const creativeData = [
        { id: 1, category: "blender", title: "بيئة Little Nightmares", content: "تحليل الإضاءة والظلال.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" },
        { id: 2, category: "unreal", title: "منطق Blueprint المتقدم", content: "تنظيم الـ Execution Bins.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500" },
        { id: 3, category: "games", title: "مراجعة Little Nightmares II", content: "تصميم المستويات والرعب النفسي.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500" },
        { id: 4, category: "davinci", title: "تعديل ألوان السينما", content: "أسرار الـ Color Grading.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500" },
        { id: 5, category: "art", title: "رسم البيئات الرقمي", content: "تعلم رسم المناظر الطبيعية.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500" },
        { id: 6, category: "programming", title: "واجهات Arch Linux", content: "تخصيص واجهة النظام.", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500" }
    ];

    const contentGrid = document.getElementById("content-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function displayContent(items) {
        if (!contentGrid) return;
        contentGrid.innerHTML = items.map((item, index) => `
            <div class="card" style="animation-delay: ${index * 0.1}s">
                <img src="${item.image}" alt="">
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                </div>
            </div>
        `).join('');
    }

    filterButtons.forEach(btn => {
        btn.onclick = () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.dataset.category;
            displayContent(category === "all" ? creativeData : creativeData.filter(i => i.category === category));
        };
    });

    displayContent(creativeData);
});