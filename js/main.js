const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModalBtn.onclick = function () {
    modal.style.display = "block";
};
closeModal.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('siteNavbar');
    const topBar = document.querySelector('.top-bar');

    if (!navbar) return;

    
    const topBarHeight = topBar ? topBar.getBoundingClientRect().height : 0;

   
    navbar.style.position = 'fixed';
    navbar.style.top = topBarHeight + 'px';
    navbar.style.left = '0';
    navbar.style.width = '100%';
    navbar.style.zIndex = '1000';


    const totalNavHeight = navbar.getBoundingClientRect().height + topBarHeight;
    document.body.style.paddingTop = totalNavHeight + 'px';

  
    const threshold = 20;
    function handleScroll() {
        if (window.scrollY > threshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);


    window.addEventListener('resize', function () {
        const newTopBarHeight = topBar ? topBar.getBoundingClientRect().height : 0;
        navbar.style.top = newTopBarHeight + 'px';
        const newTotal = navbar.getBoundingClientRect().height + newTopBarHeight;
        document.body.style.paddingTop = newTotal + 'px';
    });
});