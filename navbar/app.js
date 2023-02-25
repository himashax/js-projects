const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', d=function() {
    // class List - shows/gets all classes of element has
    // contains - check if classlist is available or not
    console.log(links.classList.contains('links'))
    //links.classList.contains('show-links') ? links.classList.remove('show-links') : links.classList.add('show-links');
    // can use toggle
    links.classList.toggle("show-links");
})