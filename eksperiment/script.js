
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function animateBox(box) {
        const viewportHeight = document.documentElement.clientHeight;
        const viewportWidth = document.documentElement.clientWidth;
        const offsetX = randomInRange(-2 * viewportWidth, 2 * viewportWidth);
        const offsetY = randomInRange(-2 * viewportHeight, 2 * viewportHeight);
    
        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;
        const translateX = offsetX > 0 ? offsetX + viewportWidth + boxWidth : offsetX - viewportWidth - boxWidth;
        const translateY = offsetY > 0 ? offsetY + viewportHeight + boxHeight : offsetY - viewportHeight - boxHeight;

        box.style.transition = 'transform 5s ease';
        box.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    function removeBox(box) {
        box.remove();
    }

    document.addEventListener('click', function () {
        boxes.forEach(box => {
            animateBox(box);

            box.addEventListener('transitionend', function () {
                removeBox(box);
            });
        });
    });
});