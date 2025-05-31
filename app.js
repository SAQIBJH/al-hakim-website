// Language management
let currentLanguage = 'en';

const content = {
    en: {
        navigation: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Products", href: "/products" },
            { name: "Contact", href: "/contact" }
        ],
        callNow: "Call Now",
        companyName: "Al Hakim",
        companySubtitle: "Hearing & Speaking",
        home: {
            heroTitle: "Leading Hearing Healthcare Solutions Since 1990",
            heroSubtitle: "Personalized Care. Advanced Technology. Lifelong Hearing Wellness.",
            ctaButton: "Book a Free Consultation",
            introduction: "Al Hakim Hearing and Speaking LLC, a leader in UAE hearing healthcare, combines cutting-edge technology with compassionate care. Founded in 1990, we empower individuals of all ages to rediscover the joy of sound through personalized solutions and European-quality standards.",
            whyChoose: "Why Choose Al Hakim",
            highlights: [
                { title: "Expert Audiologists", icon: "👂" },
                { title: "3 UAE Branches", icon: "🏥" },
                { title: "Sole Distributor for Bernafon", icon: "/bernaforn.jpg" },
                { title: "On-Site Repairs & 1-Year Warranty", icon: "🔧" },
                { title: "Rapid Response & Aftercare", icon: "🕒" },
                { title: "Compassionate Care", icon: "❤️" }
            ],
            ctaTitle: "Ready to Rediscover the Joy of Sound?",
            ctaSubtitle: "Schedule your free consultation today and take the first step towards better hearing.",
            callNow: "Call Now: +971 50 456 0730",
            bookOnline: "Book Online"
        },
        about: {
            title: "About Al Hakim Hearing & Speaking",
            subtitle: "Pioneering hearing healthcare in the UAE since 1990",
            whoWeAreTitle: "Who We Are",
            whoWeAreText: "Al Hakim Hearing and Speaking LLC is an extension of Saleh Alshawaf Trading EST., pioneering hearing healthcare in the UAE since 1990. With branches in Dubai, Abu Dhabi, and Al Ain, we deliver world-class solutions rooted in innovation and empathy.",
            missionTitle: "Mission",
            missionText: "To enhance quality of life through accessible, personalized hearing care.",
            visionTitle: "Vision",
            visionText: "A society where everyone experiences the gift of clear hearing.",
            valuesTitle: "Our Core Values",
            values: [
                { title: "Excellence in Care", icon: "🏆" },
                { title: "Innovation & Education", icon: "💡" },
                { title: "Patient-Centered Approach", icon: "❤️" }
            ]
        },
        services: {
            title: "Comprehensive Hearing Solutions",
            subtitle: "Expert care tailored to your unique hearing needs",
            services: [
                {
                    title: "Hearing Assessments",
                    description: "Advanced diagnostic tests for adults.",
                    icon: "🔍"
                },
                {
                    title: "Custom Hearing Aid Fitting",
                    description: "Wireless fitting technology for seamless adjustment.",
                    icon: "⚙️"
                },
                {
                    title: "Tinnitus Management",
                    description: "Evidence-based therapies for lasting relief.",
                    icon: "🔊"
                },
                {
                    title: "Hearing Protection",
                    description: "Custom molds for swimming, noise, and professional use.",
                    icon: "🛡️"
                }
            ]
        },
        products: {
            title: "Bernafon Hearing Aids: Clarity Redefined",
            subtitle: "Swiss Precision, Designed for Life",
            models: [
                {
                    name: "Bernafon Encanta™",
                    tagline: "Hear every laugh, even in loud spaces.",
                    benefit: "Advanced noise reduction for social settings.",
                    idealFor: "Social gatherings and daily life.",
                    badge: "Premium",
                    CTA: "Experience Encanta",
                    imgSrc: "/BernafonEncanta.jpg"
                },
                {
                    name: "Bernafon Alpha XT™",
                    tagline: "Focus on conversations, not background noise.",
                    benefit: "AI-driven speech enhancement for clarity in busy environments.",
                    idealFor: "Professionals and active lifestyles.",
                    badge: "Advanced",
                    CTA: "Try Alpha XT",
                    imgSrc: "/BernafonAlphaXT.jpg"
                },
                {
                    name: "Bernafon Alpha™",
                    tagline: "Simple, comfortable, and perfect for first-time users.",
                    benefit: "Intuitive controls and all-day comfort.",
                    idealFor: "Those new to hearing aids.",
                    badge: "Essential",
                    CTA: "Start with Alpha",
                    imgSrc: "/BernafonAlpha.jpg"
                }
            ]
        },
        contact: {
            title: "Contact Al Hakim",
            subtitle: "Get in touch with our hearing healthcare experts",
            formTitle: "Send us a Message",
            nameLabel: "Name*",
            emailLabel: "Email*",
            phoneLabel: "Phone",
            messageLabel: "Message*",
            submitButton: "Send",
            locations: {
                dubai: {
                    address: "Green Tower – Office 1503, Rigga Al Butain, near Clock Roundabout",
                    phone: "042242494 – 050 4560730",
                    hours: [
                        "Sun-Thurs: 9:30 AM – 02:30 PM",
                        "And 04:00 PM – 07:00 PM",
                        "Friday: 9:30 AM – 01:00 PM",
                        "And 02:30 PM – 04:30 PM",
                        "Sat: Closed"
                    ]
                },
                abuDhabi: {
                    address: "Muroor Road, Zone 1, Above Le Bouranger Café",
                    phone: "056 5588989 – 050 4560730",
                    hours: [
                        "Sat-Thurs: 9:00 AM – 01:30 PM",
                        "4:30 PM – 08:00 PM",
                        "Fri: 9 AM – 12:30 PM",
                        "And 02:00 PM – 04:00 PM"
                    ]
                }
            }
        }
    },
    ar: {
        navigation: [
            { name: "الرئيسية", href: "/" },
            { name: "من نحن", href: "/about" },
            { name: "الخدمات", href: "/services" },
            { name: "المنتجات", href: "/products" },
            { name: "اتصل بنا", href: "/contact" }
        ],
        callNow: "اتصل الآن",
        companyName: "الحكيم",
        companySubtitle: "للسمع والتخاطب",
        home: {
            heroTitle: "الحلول الرائدة في رعاية السمع منذ عام ١٩٩٠",
            heroSubtitle: "رعاية مخصصة. تقنيات متطورة. صحة سمعية تدوم مدى الحياة.",
            ctaButton: "احجز استشارة مجانية",
            introduction: "مركز الحكيم للسمع والتخاطب، الرائد في رعاية السمع بالإمارات، يجمع بين أحدث التقنيات والرعاية الإنسانية. منذ تأسيسنا عام ١٩٩٠، نساعد الأشخاص من جميع الأعمار على استعادة متعة السمع من خلال حلول مخصصة ومعايير جودة أوروبية.",
            whyChoose: "لماذا تختار الحكيم",
            highlights: [
                { title: "أخصائيو سمع معتمدون", icon: "👂" },
                { title: "٣ فروع في الإمارات", icon: "🏥" },
                { title: "الموزع الحصري لبيرنافون السويسرية", icon: "/bernaforn.jpg" },
                { title: "إصلاحات في الموقع وضمان لمدة عام", icon: "🔧" },
                { title: "دعم سريع ومتابعة بعد العلاج", icon: "🕒" },
                { title: "رعاية إنسانية متميزة", icon: "❤️" }
            ],
            ctaTitle: "هل أنت مستعد لاستعادة متعة السمع؟",
            ctaSubtitle: "احجز استشارتك المجانية اليوم واتخذ الخطوة الأولى نحو سمع أفضل.",
            callNow: "اتصل الآن: ٠٥٠٤٥٦٠٧٣٠",
            bookOnline: "احجز عبر الإنترنت"
        },
        about: {
            title: "عن مركز الحكيم للسمع والتخاطب",
            subtitle: "رواد رعاية السمع في الإمارات منذ عام ١٩٩٠",
            whoWeAreTitle: "من نحن",
            whoWeAreText: "نحن امتداد لشركة صالح الشواف التجارية، رواد رعاية السمع في الإمارات منذ عام ١٩٩٠. مع فروع في دبي وأبوظبي والعين، نقدم حلولًا عالمية تعتمد على الابتكار والرحمة.",
            missionTitle: "الرسالة",
            missionText: "تحسين جودة الحياة عبر رعاية سمعية مخصصة ومتاحة للجميع.",
            visionTitle: "الرؤية",
            visionText: "مجتمع يتمتع فيه الجميع بنعمة السمع الواضح.",
            valuesTitle: "قيمنا الأساسية",
            values: [
                { title: "التميز في الرعاية", icon: "🏆" },
                { title: "الابتكار والتعليم", icon: "💡" },
                { title: "نهج يركز على المريض", icon: "❤️" }
            ]
        },
        services: {
            title: "حلول سمعية شاملة",
            subtitle: "رعاية متخصصة مصممة لاحتياجاتك السمعية الفريدة",
            services: [
                {
                    title: "فحوصات السمع",
                    description: "فحوصات تشخيصية متطورة للكبار.",
                    icon: "🔍"
                },
                {
                    title: "تركيب سماعات مخصصة",
                    description: "تقنية لاسلكية لضبط دقيق.",
                    icon: "⚙️"
                },
                {
                    title: "إدارة طنين الأذن",
                    description: "علاجات مدعومة بأبحاث لتخفيف دائم.",
                    icon: "🔊"
                },
                {
                    title: "حماية السمع",
                    description: "قوالب مخصصة للسباحة والضوضاء والاستخدام المهني.",
                    icon: "🛡️"
                }
            ]
        },
        products: {
            title: "سماعات بيرنافون: وضوح مُعاد تعريفه",
            subtitle: "دقة سويسرية مصممة للحياة",
            models: [
                {
                    name: "بيرنافون إنكانتا™",
                    tagline: "اسمع كل ضحكة، حتى في الأماكن الصاخبة.",
                    benefit: "تقليل الضوضاء المتقدم للأماكن الاجتماعية.",
                    idealFor: "مثالية للمناسبات الاجتماعية والحياة اليومية.",
                    badge: "متميز",
                    CTA: "جرّب إنكانتا",
                    imgSrc: "/BernafonEncanta.jpg"
                },
                {
                    name: "بيرنافون ألفا اكس تي™",
                    tagline: "ركز على المحادثات، ليس الضوضاء.",
                    benefit: "تعزيز الكلام بالذكاء الاصطناعي للوضوح في الأماكن المزدحمة.",
                    idealFor: "مثالية للمحترفين وأنماط الحياة النشطة.",
                    badge: "متقدم",
                    CTA: "جرّب ألفا اكس تي",
                    imgSrc: "/BernafonAlphaXT.jpg"
                },
                {
                    name: "بيرنافون ألفا™",
                    tagline: "بسيطة ومريحة ومثالية للمستخدمين الجدد.",
                    benefit: "تحكم بديهي وراحة طوال اليوم.",
                    idealFor: "مثالية للمستخدمين الجدد للسماعات.",
                    badge: "أساسي",
                    CTA: "ابدأ مع ألفا",
                    imgSrc: "/BernafonAlpha.jpg"
                }
            ]
        },
        contact: {
            title: "اتصل بالحكيم",
            subtitle: "تواصل مع خبراء الرعاية السمعية لدينا",
            formTitle: "أرسل لنا رسالة",
            nameLabel: "الاسم*",
            emailLabel: "البريد الإلكتروني*",
            phoneLabel: "الهاتف",
            messageLabel: "الرسالة*",
            submitButton: "إرسال",
            locations: {
                dubai: {
                    address: "البرج الأخضر، رقة البطين – ديرة، دبي الدور الخامس عشر مكتب رقم ١٥٠٣",
                    phone: "٠٤٢٢٤٢٤٩٤ – ٠٥٠٤٥٦٠٧٣٠",
                    hours: [
                        "الأحد - الخميس: ٩:٣٠ صباحًا – ٢:٣٠ مساءً",
                        "٤:٠٠ مساءً – ٧:٣٠ مساءً",
                        "الجمعة: ٩:٣٠ صباحًا – ١:٠٠ ظهراً",
                        "٢:٣٠ عصراً – ٤:٣٠ مساءً",
                        "السبت: مغلق"
                    ]
                },
                abuDhabi: {
                    address: "شارع المرور – المنطقة الأولي – فوق كافتيريا لوبولانجر",
                    phone: "٠٥٦٥٥٨٨٩٨٩ – ٠٥٠٤٥٦٠٧٣٠",
                    hours: [
                        "السبت - الخميس: ٩:٠٠ صباحًا – ١:٣٠ مساءً",
                        "٤:٣٠ مساءً – ٨:٠٠ مساءً",
                        "الجمعة: ٩ صباحًا – ١٢:٣٠ ظهراً",
                        "٢:٠٠ مساءً – ٤:٠٠ مساءً"
                    ]
                }
            }
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupMobileMenu();
    renderNavigation();
    renderLanguageSelector();
    loadContent(window.location.pathname);
});

function initializeLanguage() {
    const savedLang = localStorage.getItem('preferred-language');
    currentLanguage = savedLang || (navigator.language?.startsWith('ar') ? 'ar' : 'en');
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateContent();
}

function updateContent() {
    const currentContent = content[currentLanguage];
    
    // Update static content
    document.getElementById('companyName').textContent = currentContent.companyName;
    document.getElementById('companySubtitle').textContent = currentContent.companySubtitle;
    document.getElementById('callNowText').textContent = currentContent.callNow;
    
    renderNavigation();
}

function renderNavigation() {
    const desktopNav = document.getElementById('desktopNav');
    const mobileMenu = document.getElementById('mobileMenu');
    const currentContent = content[currentLanguage];

    // Clear existing navigation
    desktopNav.innerHTML = '';
    mobileMenu.innerHTML = '';

    // Render desktop navigation
    currentContent.navigation.forEach(item => {
        desktopNav.innerHTML += `
            <a href="${item.href}" 
               class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                ${item.name}
            </a>
        `;
    });

    // Render mobile navigation
    currentContent.navigation.forEach(item => {
        mobileMenu.innerHTML += `
            <a href="${item.href}" 
               class="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                ${item.name}
            </a>
        `;
    });
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

function renderLanguageSelector() {
    const selector = document.getElementById('languageSelector');
    selector.innerHTML = `
        <button onclick="toggleLanguage()" 
                class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
            <span class="text-lg">${currentLanguage === 'en' ? '🇬🇧' : '🇦🇪'}</span>
            <span class="text-sm font-medium">${currentLanguage === 'en' ? 'English' : 'العربية'}</span>
        </button>
    `;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('preferred-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateContent();
    loadContent(window.location.pathname);
}

// Simple router
function loadContent(path) {
    const mainContent = document.getElementById('mainContent');
    
    // Default to home if path is root
    if (path === '/') {
        renderHome(mainContent);
    } else {
        // Remove leading slash and load appropriate content
        const page = path.substring(1);
        switch(page) {
            case 'about':
                renderAbout(mainContent);
                break;
            case 'services':
                renderServices(mainContent);
                break;
            case 'products':
                renderProducts(mainContent);
                break;
            case 'contact':
                renderContact(mainContent);
                break;
            default:
                renderHome(mainContent);
        }
    }
}

// Handle navigation without page reload
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(e.target.href).pathname;
        window.history.pushState({}, '', path);
        loadContent(path);
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
});

// Content rendering functions for each page
function renderHome(container) {
    const currentContent = content[currentLanguage].home;
    
    container.innerHTML = `
        <div class="min-h-screen">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-20 lg:py-4">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div class="space-y-6 lg:space-y-8 ${currentLanguage === 'ar' ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}">
                            <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                ${currentContent.heroTitle}
                            </h1>
                            <p class="text-lg md:text-xl text-gray-600 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                ${currentContent.heroSubtitle}
                            </p>
                            <div class="${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                <a href="/contact" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-medium transition-colors">
                                    ${currentContent.ctaButton}
                                </a>
                            </div>
                        </div>
                        <div class="${currentLanguage === 'ar' ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}">
                            <img src="/placeholder.svg" alt="Hearing healthcare professional with patient" class="rounded-2xl shadow-2xl w-full h-auto">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Introduction Section -->
            <section class="py-12 md:py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto">
                        <p class="text-base md:text-lg text-gray-700 leading-relaxed ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.introduction}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us Section -->
            <section class="py-12 md:py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        ${currentContent.whyChoose}
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        ${currentContent.highlights.map(highlight => `
                            <div class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                                <div class="text-4xl mb-4 flex justify-center items-center h-16">
                                    ${highlight.icon.endsWith('.jpg') ? 
                                        `<img src="${highlight.icon}" alt="${highlight.title}" class="h-10 w-10 object-contain">` :
                                        `<span>${highlight.icon}</span>`
                                    }
                                </div>
                                <h3 class="text-lg md:text-xl font-semibold text-gray-900">
                                    ${highlight.title}
                                </h3>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-12 md:py-16 bg-blue-600">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            ${currentContent.ctaTitle}
                        </h2>
                        <p class="text-lg md:text-xl text-blue-100">
                            ${currentContent.ctaSubtitle}
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+971504560730" class="flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                                ${currentContent.callNow}
                            </a>
                            <a href="/contact" class="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                                ${currentContent.bookOnline}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderAbout(container) {
    const currentContent = content[currentLanguage].about;
    
    container.innerHTML = `
        <div class="min-h-screen">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto text-center space-y-8">
                        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.title}
                        </h1>
                        <p class="text-xl text-gray-600 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Who We Are Section -->
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                ${currentContent.whoWeAreTitle}
                            </h2>
                            <p class="text-lg text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                ${currentContent.whoWeAreText}
                            </p>
                        </div>
                        <div class="relative">
                            <img src="/placeholder.svg" alt="Al Hakim team of professionals" class="rounded-2xl shadow-lg w-full h-auto">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mission & Vision Section -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="bg-white rounded-lg p-8 shadow-sm">
                            <div class="space-y-6">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span class="text-2xl">🎯</span>
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        ${currentContent.missionTitle}
                                    </h3>
                                </div>
                                <p class="text-gray-700">
                                    ${currentContent.missionText}
                                </p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg p-8 shadow-sm">
                            <div class="space-y-6">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <span class="text-2xl">👁️</span>
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        ${currentContent.visionTitle}
                                    </h3>
                                </div>
                                <p class="text-gray-700">
                                    ${currentContent.visionText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Core Values Section -->
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                        ${currentContent.valuesTitle}
                    </h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        ${currentContent.values.map(value => `
                            <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                                <div class="text-4xl mb-4">${value.icon}</div>
                                <h3 class="text-xl font-semibold text-gray-900">
                                    ${value.title}
                                </h3>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderServices(container) {
    const currentContent = content[currentLanguage].services;
    
    container.innerHTML = `
        <div class="min-h-screen">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto text-center space-y-8">
                        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.title}
                        </h1>
                        <p class="text-xl text-gray-600 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Services Grid -->
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12">
                        ${currentContent.services.map(service => `
                            <div class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <div class="space-y-6">
                                    <div class="flex items-center space-x-4 ${currentLanguage === 'ar' ? 'gap-2' : ''}">
                                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span class="text-2xl">${service.icon}</span>
                                        </div>
                                        <h3 class="text-2xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            ${service.title}
                                        </h3>
                                    </div>
                                    <p class="text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                        ${service.description}
                                    </p>
                                    <img src="/placeholder.svg" alt="${service.title}" class="rounded-lg w-full h-48 object-cover">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-16 bg-blue-600">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div class="max-w-3xl mx-auto space-y-8">
                        <h2 class="text-3xl lg:text-4xl font-bold text-white">
                            Ready to Experience Better Hearing?
                        </h2>
                        <p class="text-lg text-blue-100">
                            Schedule your consultation today and take the first step towards better hearing.
                        </p>
                        <a href="/contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Book Your Appointment
                        </a>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderProducts(container) {
    const currentContent = content[currentLanguage].products;
    
    container.innerHTML = `
        <div class="min-h-screen">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-blue-50 to-green-50 py-8">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-8">
                            <div class="space-y-4">
                                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                    ${currentContent.title}
                                </h1>
                                <h2 class="text-2xl font-semibold text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                    ${currentContent.subtitle}
                                </h2>
                            </div>
                        </div>
                        <div class="relative">
                            <img src="/productHeroImage.jpg" alt="Person wearing hearing aid" class="rounded-2xl shadow-2xl w-full h-auto">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Models Section -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-3 gap-8">
                        ${currentContent.models.map(model => `
                            <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                                <div class="relative h-64">
                                    <img src="${model.imgSrc}" alt="${model.name}" class="w-full h-full object-contain">
                                    <div class="absolute top-4 left-4">
                                        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            ${model.badge}
                                        </span>
                                    </div>
                                </div>
                                <div class="p-6 space-y-4 flex-1 flex flex-col">
                                    <h3 class="text-2xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                        ${model.name}
                                    </h3>
                                    <p class="text-blue-600 font-semibold ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                        "${model.tagline}"
                                    </p>
                                    <div class="space-y-2 flex-1">
                                        <p class="text-sm text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            <strong>${currentLanguage === 'ar' ? 'الفائدة الرئيسية:' : 'Key Benefit:'}</strong> ${model.benefit}
                                        </p>
                                        <p class="text-sm text-gray-600 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            <strong>${currentLanguage === 'ar' ? 'مثالية ل:' : 'Ideal For:'}</strong> ${model.idealFor}
                                        </p>
                                    </div>
                                    <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
                                        ${model.CTA}
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderContact(container) {
    const currentContent = content[currentLanguage].contact;
    
    container.innerHTML = `
        <div class="min-h-screen">
            <!-- Hero Section -->
            <section class="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto text-center space-y-8">
                        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.title}
                        </h1>
                        <p class="text-xl text-gray-600 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                            ${currentContent.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Contact Form & Info Section -->
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12">
                        <!-- Contact Form -->
                        <div class="bg-gray-50 rounded-lg p-8">
                            <div class="space-y-6">
                                <h2 class="text-3xl font-bold text-gray-900 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                    ${currentContent.formTitle}
                                </h2>
                                <form class="space-y-6" onsubmit="event.preventDefault();">
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            ${currentContent.nameLabel}
                                        </label>
                                        <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            ${currentContent.emailLabel}
                                        </label>
                                        <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            ${currentContent.phoneLabel}
                                        </label>
                                        <input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-gray-700 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}">
                                            ${currentContent.messageLabel}
                                        </label>
                                        <textarea required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"></textarea>
                                    </div>
                                    <button type="submit" class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                        ${currentContent.submitButton}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <!-- Locations -->
                        <div class="space-y-8">
                            <!-- Dubai Location -->
                            <div class="bg-white rounded-lg p-8 shadow-sm">
                                <div class="space-y-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span class="text-2xl">📍</span>
                                        </div>
                                        <h3 class="text-2xl font-bold text-gray-900">Dubai</h3>
                                    </div>
                                    <p class="text-gray-700">${currentContent.locations.dubai.address}</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xl">📞</span>
                                        <span class="text-gray-700">${currentContent.locations.dubai.phone}</span>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="flex items-center space-x-2">
                                            <span class="text-xl">🕒</span>
                                            <span class="font-medium text-gray-900">Business Hours</span>
                                        </div>
                                        <div class="text-sm text-gray-700 space-y-1 ml-6">
                                            ${currentContent.locations.dubai.hours.map(hour => `
                                                <p>${hour}</p>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Abu Dhabi Location -->
                            <div class="bg-white rounded-lg p-8 shadow-sm">
                                <div class="space-y-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <span class="text-2xl">📍</span>
                                        </div>
                                        <h3 class="text-2xl font-bold text-gray-900">Abu Dhabi</h3>
                                    </div>
                                    <p class="text-gray-700">${currentContent.locations.abuDhabi.address}</p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xl">📞</span>
                                        <span class="text-gray-700">${currentContent.locations.abuDhabi.phone}</span>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="flex items-center space-x-2">
                                            <span class="text-xl">🕒</span>
                                            <span class="font-medium text-gray-900">Business Hours</span>
                                        </div>
                                        <div class="text-sm text-gray-700 space-y-1 ml-6">
                                            ${currentContent.locations.abuDhabi.hours.map(hour => `
                                                <p>${hour}</p>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}