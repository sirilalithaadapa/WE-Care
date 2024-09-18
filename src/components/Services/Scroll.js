document.addEventListener('DOMContentLoaded', () => {
    const serviceList = document.querySelector('.service-list');

    let scrollAmount = 0;
    let scrollMax = serviceList.scrollWidth - serviceList.clientWidth;

    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount >= scrollMax) {
            scrollAmount = 0; // Reset the scroll position when reaching the end
        }
        serviceList.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    setInterval(autoScroll, 50); // Adjust the scroll speed
});