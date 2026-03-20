$(document).ready(function () {

    $(".partner-carousel").owlCarousel({
        items: 5,
        loop: true,
        dots: true,
        margin: 20
    });
    $(".promo-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question-name');
    
    questions.forEach(item => {
        item.addEventListener('click', () => {
            console.log("Đã click vào:", item.innerText); // Dòng này để bạn kiểm tra trong F12
            item.classList.toggle('active');
        });
    });
});