const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    
    
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1.5}`;
        })
        line1.classList.toggle('black');
        line2.classList.toggle('black');
        line3.classList.toggle('black');
    })

}
navSlide();