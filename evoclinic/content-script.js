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

// قائمة بـ 20 موضوع طبي حقيقي مع محتوى وصور مخصصة
// تم إضافة رابط الصفحة لكل موضوع (url) لسهولة الربط اليدوي
const posts = [
    { 
        id: 1, 
        title: "مرض السكري النوع الثاني", 
        content: "تعرف على أسباب مقاومة الأنسولين، الأعراض الشائعة مثل العطش المستمر، وكيفية تنظيم السكر من خلال النظام الغذائي والنشاط البدني.", 
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80",
        url: "posts/post.html" // هنا تربط صفحة السكر اللي عملتها
    },
    { 
        id: 2, 
        title: "ارتفاع ضغط الدم", 
        content: "يُسمى القاتل الصامت؛ تعرف على مستويات الضغط الطبيعية وأهمية تقليل الصوديوم (الملح) في الطعام لتجنب مشاكل الشرايين.", 
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&q=80",
        url: "pages/blood-pressure.html"
    },
    { 
        id: 3, 
        title: "صحة القلب والأوعية", 
        content: "نصائح للوقاية من النوبات القلبية، دور الكوليسترول الضار، وأهمية الدهون الصحية مثل أوميجا 3 في حماية القلب.", 
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&q=80",
        url: "pages/heart-health.html"
    },
    { 
        id: 4, 
        title: "هشاشة العظام", 
        content: "كيفية الحفاظ على كثافة العظام من خلال الكالسيوم وفيتامين د، والتمارين الرياضية التي تقوي الهيكل العظمي.", 
        image: "https://images.unsplash.com/photo-1511688858354-bc8651628ca8?w=500&q=80",
        url: "pages/bones.html"
    },
    { 
        id: 5, 
        title: "اضطرابات القولون العصبي", 
        content: "فهم العلاقة بين التوتر والجهاز الهضمي، الأطعمة التي تثير القولون، وكيفية تحسين عملية الهضم بالألياف.", 
        image: "https://images.unsplash.com/photo-1515598391917-406f383f2c20?w=500&q=80",
        url: "pages/ibs.html"
    },
    { 
        id: 6, 
        title: "نقص فيتامين د", 
        content: "أعراض الخمول وآلام المفاصل المرتبطة بنقص \"فيتامين الشمس\"، والمصادر الطبيعية والجرعات الآمنة للتعويض.", 
        image: "https://images.unsplash.com/photo-1584017947282-e3d307577692?w=500&q=80",
        url: "pages/vitamin-d.html"
    },
    { 
        id: 7, 
        title: "الربو وحساسية الصدر", 
        content: "كيفية التعامل مع نوبات الربو، مسببات الحساسية الموسمية، وطرق استخدام البخاخات الوقائية بشكل صحيح.", 
        image: "https://images.unsplash.com/photo-1582718819315-1835d455cd2a?w=500&q=80",
        url: "pages/asthma.html"
    },
    { 
        id: 8, 
        title: "فقر الدم (الأنيميا)", 
        content: "أسباب نقص الحديد في الدم، تأثيره على مستويات الطاقة والتركيز، وأفضل الأطعمة الغنية بالحديد لرفع الهيموجلوبين.", 
        image: "https://images.unsplash.com/photo-1579152276503-7f28688846c4?w=500&q=80",
        url: "pages/anemia.html"
    },
    { 
        id: 9, 
        title: "الصداع النصفي (الشقيقة)", 
        content: "الفرق بين الصداع العادي والنصفي، المحفزات الضوئية والصوتية، وأحدث طرق العلاج والوقاية من النوبات المتكررة.", 
        image: "https://images.unsplash.com/photo-1531346680769-a1d79b57ce51?w=500&q=80",
        url: "pages/migraine.html"
    },
    { 
        id: 10, 
        title: "صحة الكلى والوقاية", 
        content: "أهمية شرب الماء الكافي، دور الكلى في تنقية السموم، وكيفية الوقاية من حصوات الكلى والالتهابات.", 
        image: "https://images.unsplash.com/photo-1502741126161-b048400d085d?w=500&q=80",
        url: "pages/kidney.html"
    },
    { 
        id: 11, 
        title: "العناية بالبشرة وحب الشباب", 
        content: "طرق علاج بثور الوجه طبياً، أهمية استخدام واقي الشمس يومياً، وكيفية تحديد نوع بشرتك لاختيار المنتجات المناسبة.", 
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80",
        url: "pages/skin.html"
    },
    { 
        id: 12, 
        title: "السمنة ومخاطرها", 
        content: "تأثير الوزن الزائد على المفاصل والقلب، استراتيجيات حرق الدهون الصحية بعيداً عن الأنظمة القاسية.", 
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
        url: "pages/obesity.html"
    },
    { 
        id: 13, 
        title: "التهاب المفاصل", 
        content: "الفرق بين التهاب المفاصل الروماتويدي والخشونة الناتجة عن السن، وطرق تقليل التورم والآلام.", 
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80",
        url: "pages/arthritis.html"
    },
    { 
        id: 14, 
        title: "صحة الأسنان واللثة", 
        content: "طرق تنظيف الأسنان الصحيحة، مخاطر تراكم الجير على اللثة، وأهمية الزيارة الدورية لطبيب الأسنان.", 
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80",
        url: "pages/dental.html"
    },
    { 
        id: 15, 
        title: "قرحة المعدة", 
        content: "أعراض بكتيريا المعدة (جرثومة المعدة)، تأثير الأدوية المسكنة على جدار المعدة، والنظام الغذائي المناسب للتعافي.", 
        image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=500&q=80",
        url: "pages/stomach.html"
    },
    { 
        id: 16, 
        title: "الغدة الدرقية", 
        content: "خمول أو نشاط الغدة الدرقية؛ كيف تؤثر الهرمونات على الحرق (الميتابوليزم) والحالة المزاجية والوزن.", 
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80",
        url: "pages/thyroid.html"
    },
    { 
        id: 17, 
        title: "الأرق وجودة النوم", 
        content: "أهمية دورة النوم العميق لإصلاح خلايا الجسم، تأثير الشاشات الزرقاء، وتقنيات الاسترخاء قبل النوم.", 
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&q=80",
        url: "pages/sleep.html"
    },
    { 
        id: 18, 
        title: "تقوية المناعة", 
        content: "دور الزنك وفيتامين سي، أهمية النوم والرياضة في تعزيز خطوط الدفاع الأولى للجسم ضد الفيروسات.", 
        image: "https://images.unsplash.com/photo-1584362946444-1e663f200bcd?w=500&q=80",
        url: "pages/immunity.html"
    },
    { 
        id: 19, 
        title: "صحة العين والنظر", 
        content: "مخاطر إجهاد العين الرقمي، أهمية فحص قاع العين لمرضى السكري، وطرق الحفاظ على حدة الإبصار.", 
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&q=80",
        url: "pages/eye-health.html"
    },
    { 
        id: 20, 
        title: "الإسعافات الأولية", 
        content: "أساسيات التعامل مع الجروح، الحروق البسيطة، وحالات الإغماء حتى وصول الفريق الطبي المختص.", 
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80",
        url: "pages/first-aid.html"
    },
    { 
        id: 21, 
        title: "الإسعافات الأولي123", 
        content: "أساسيات التعامل مع الجروح، الحروق البسيطة، وحالات الإغماء حتى وصول الفريق الطبي المختص.", 
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80",
        url: "pages/first-aid.html"
    }
];

const container = document.getElementById("posts-container");
const searchInput = document.getElementById("searchInput");

function renderPosts(data) {
    container.innerHTML = "";
    data.forEach(post => {
        container.innerHTML += `
            <div class="card">
                <img src="${post.image}" alt="${post.title}">
                <div class="card-body">
                    <div>
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                    </div>
                    <a href="${post.url}" class="read-more">اقرأ المزيد ←</a>
                </div>
            </div>
        `;
    });
}

renderPosts(posts);

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(value) || 
        post.content.toLowerCase().includes(value)
    );
    renderPosts(filtered);
});