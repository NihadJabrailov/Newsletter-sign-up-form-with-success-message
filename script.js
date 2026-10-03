const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

// DOM-dan yeni əlavə etdiyimiz elementləri tuturuq
const mainContainer = document.getElementById('mainContainer');
const successContainer = document.getElementById('successContainer');
const userEmail = document.getElementById('userEmail');
const dismissButton = document.getElementById('dismissButton');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        // Xəta vəziyyəti
        errorMessage.style.display = 'block';
        emailInput.classList.add('error');
    } else {
        // Uğurlu vəziyyət
        errorMessage.style.display = 'none';
        emailInput.classList.remove('error');

        // 1. Daxil edilən e-poçtu Success ekranındakı span-ın içinə yaz
        userEmail.textContent = emailValue;

        // 2. Əsas form ekranını gizlət
        mainContainer.classList.add('hidden');

        // 3. Success ekranını göstər və animasiya tətbiq et
        successContainer.classList.remove('hidden');
        successContainer.classList.remove('animate-in');
        // Bir frame gözləyirik ki, animasiya yenidən işləsin
        requestAnimationFrame(() => {
            successContainer.classList.add('animate-in');
        });
    }
});

// Dismiss düyməsinə basıldıqda baş verəcək hadisə
dismissButton.addEventListener('click', function () {
    // 1. Success ekranını gizlət və animasiya klassını sil
    successContainer.classList.add('hidden');
    successContainer.classList.remove('animate-in');

    // 2. Əsas form ekranını yenidən göstər
    mainContainer.classList.remove('hidden');

    // 3. Yenidən istifadə üçün input xanasının içini təmizlə
    emailInput.value = '';
});

// İstifadəçi inputa nəsə yazmağa başlayanda xəta mesajını itir
emailInput.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error');
});

// Desktop / Mobile şəklini ekran ölçüsünə görə dəyiş
const illustrationImg = document.getElementById('illustrationImg');

function updateIllustration() {
    if (window.innerWidth >= 768) {
        illustrationImg.src = './images/illustration-sign-up-desktop.svg';
    } else {
        illustrationImg.src = './images/illustration-sign-up-mobile.svg';
    }
}

updateIllustration();
window.addEventListener('resize', updateIllustration);
