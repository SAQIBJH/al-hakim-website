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
        companySubtitle: "Hearing & Speaking"
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
        companySubtitle: "للسمع والتخاطب"
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
    // Implement home page content
}

function renderAbout(container) {
    // Implement about page content
}

function renderServices(container) {
    // Implement services page content
}

function renderProducts(container) {
    // Implement products page content
}

function renderContact(container) {
    // Implement contact page content
}