const mobileNavContainer = document.querySelector('.mobile-nav-container');
const hamburgerIcon = document.getElementById('hamburger-icon');
const iconClose = document.getElementById('icon-close');

const toggleMobileNav = () => {
    mobileNavContainer.classList.toggle('is-active');
};

hamburgerIcon.addEventListener('click', toggleMobileNav);
iconClose.addEventListener('click', toggleMobileNav);


document.querySelector('.btn-explore').addEventListener('click', () => {
    window.location.href = "web_page/destination.html";
})