// Navbar Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    header.classList.toggle('navbar-fixed', window.scrollY > 0);
});

// Captcha Verified
const captcha = document.getElementById('captchaNumber');
const inputField = document.getElementById('inputCaptcha');
const btnBermain = document.getElementById('btnBermain2');
const btnReset = document.getElementById('btnReset');

let allCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() { //Getting 9 Random Character From The Array
    for (let i = 0; i < 6; i++) {
        let randomChar = allCharacter[Math.floor(Math.random() * allCharacter.length)];
        captcha.innerText += `${randomChar}`; // Passing 6 Random Character Inside Captcha InnerText
    }
}

getCaptcha();

btnReset.addEventListener('click', function() { // Get Another Captcha 
    captcha.innerText = '';
    getCaptcha();
});

btnBermain.addEventListener('click', function(event) {
    event.preventDefault();
    // Adding Space After Each Value Of User Entered Captcha
    let inputVal = inputField.value;
    if (inputVal == captcha.innerText) {
        window.location.href = '../QuizPage/quiz1.html';
    } else {
        Swal.fire('Captcha Anda Salah, Silahkan Ulangi');
        captcha.innerText = '';
        getCaptcha();
    }
});