function onscroll(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
    change.target.classList.add('container-show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onscroll, options);
let elements = document.querySelectorAll('.header, .container, .container-1, .container-2, .container-3, .container-4, .footer');

for (let elm of elements) {
    observer.observe(elm);
}
