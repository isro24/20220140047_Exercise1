document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.Image1');
    images.forEach(image => {
        image.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            navigateToPage(target);
        });
    });

    function navigateToPage(target) {
        document.querySelector('.container').style.transform = 'translateX(-100%)';
        setTimeout(() => {
            window.location.href = target;
        }, 500); 
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".Image1");

    images.forEach((image) => {
        image.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        image.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

        image.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            window.location.href = target;
        });
    });
});




