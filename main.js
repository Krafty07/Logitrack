// Smooth scroll to Services section
document.querySelector('a[href="#services"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});