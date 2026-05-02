// script.js

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'photos/photo_1.jpg', alt: 'Photo 1' },
        { src: 'photos/photo_2.jpg', alt: 'Photo 2' },
        { src: 'photos/photo_3.jpg', alt: 'Photo 3' },
        { src: 'photos/photo_4.jpg', alt: 'Photo 4' },
        { src: 'photos/photo_5.jpg', alt: 'Photo 5' },
        { src: 'photos/photo_6.jpg', alt: 'Photo 6' },
        { src: 'photos/photo_7.jpg', alt: 'Photo 7' }

    ];

    let currentIndex = 0;
    const slideshowContainer = document.querySelector('.slideshow-container');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    function initSlideshow() {
        if (!slideshowContainer) {
            console.error("Slideshow container not found!");
            return;
        }

        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.classList.add('slideshow-image');
            if (index === currentIndex) {
                imgElement.classList.add('active');
            }
            slideshowContainer.appendChild(imgElement);
        });
    }

    function displayImage() {
        const imageElements = slideshowContainer.querySelectorAll('.slideshow-image');
        imageElements.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        displayImage();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        displayImage();
    }

    // Initialize the slideshow
    initSlideshow();
    displayImage(); // Ensure the first image is displayed

    // Add event listeners
    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);
});