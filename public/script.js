document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const gallery = document.querySelector('#gallery');
    const addedImages = new Set();
    let imagesArray = [];
    let currentIndex = -1;

    fetch('/images')
        .then(response => response.json())
        .then(images => {
            imagesArray = images;
            images.forEach(image => {
                const imageUrl = `images/${image}`;
                if (!addedImages.has(imageUrl)) {
                    const div = document.createElement('div');
                    div.classList.add('gallery-item');
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = image;
                    div.appendChild(img);
                    gallery.appendChild(div);
                    addedImages.add(imageUrl);

                    img.addEventListener('click', () => {
                        currentIndex = imagesArray.indexOf(image);
                        lightbox.style.display = 'block';
                        lightboxImg.src = img.src;
                        updateArrows();
                    });
                }
            });
        });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            lightboxImg.src = `images/${imagesArray[currentIndex]}`;
            updateArrows();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < imagesArray.length - 1) {
            currentIndex++;
            lightboxImg.src = `images/${imagesArray[currentIndex]}`;
            updateArrows();
        }
    });

    function updateArrows() {
        prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentIndex < imagesArray.length - 1 ? 'block' : 'none';
    }
});