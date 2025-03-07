document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    
    function showSlides(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides(slideIndex);
    }

    showSlides(slideIndex);

    document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1);
    });

    setInterval(() => changeSlide(1), 5000);

});

function toggleObjective(index) {
    const details = document.querySelectorAll(".objective-details");
    const btns = document.querySelectorAll(".expand-btn");
    
    if (details[index].style.display === "block") {
        details[index].style.display = "none";
        btns[index].textContent = "Learn More";
    } else {
        details[index].style.display = "block";
        btns[index].textContent = "Show Less";
    }
}


