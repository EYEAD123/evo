document.addEventListener('DOMContentLoaded', () => {
    // --- كود الهمبرجر منيو ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.onclick = function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        };

        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.onclick = () => {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            };
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }

    // --- كود فلترة المحتوى ---
    const creativeData = [
        { id: 1, category: "blender", title: "بيئة Little Nightmares", content: "إضاءة وخامات.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" },
        { id: 2, category: "unreal", title: "Blueprint Logic", content: "تنظيم الـ Functions.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500" },
        { id: 3, category: "games", title: "تحليل ألعاب الرعب", content: "دراسة ميكانيكيات الخوف.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500" },
        { id: 4, category: "davinci", title: "Color Grading", content: "تصحيح ألوان سينمائي.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500" },
        { id: 5, category: "art", title: "Character Design", content: "رسم شخصيات رقمي.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500" },
        { id: 6, category: "programming", title: "Linux UI Customization", content: "تطوير واجهات باستخدام CSS.", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500" }
    ];

    const contentGrid = document.getElementById("content-grid");

    function displayContent(items) {
        if (!contentGrid) return;
        contentGrid.innerHTML = items.map(item => `
            <div class="card">
                <img src="${item.image}" alt="">
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                </div>
            </div>
        `).join('');
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-category');
            displayContent(cat === 'all' ? creativeData : creativeData.filter(i => i.category === cat));
        });
    });

    displayContent(creativeData);
});