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
            console.log("Đã click vào:", item.innerText); 
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-list');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function() {
            console.log("Đã nhấn nút Menu!");         
            navMenu.classList.toggle('active');
            console.log("Trạng thái class active:", navMenu.classList.contains('active'));
        });
    } else {
        console.error("Không tìm thấy nút bấm hoặc danh sách menu! Hãy kiểm tra lại ID trong HTML.");
    }
});