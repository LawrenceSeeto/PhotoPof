document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const gallery = document.querySelector('#gallery');
    const addedImages = new Set();
    let imagesArray = [
        'public/images/photo1.jpg',
        'public/images/photo2.jpg',
        'public/images/photo3.jpg',
        'public/images/photo4.jpg',
        'public/images/photo5.jpg',
        'public/images/photo6.jpg',
        'public/images/photo7.jpg',
        'public/images/photo8.jpg',
        'public/images/photo9.jpg',
        'public/images/photo10.jpg',
        'public/images/photo11.jpg',
        'public/images/photo12.jpg',
        'public/images/photo13.jpg',
        'public/images/photo14.jpg',
        'public/images/photo15.jpg',
        'public/images/photo16.jpg',
        'public/images/photo17.jpg',
        'public/images/photo18.jpg',
        'public/images/photo19.jpg',
        'public/images/photo20.jpg',
        'public/images/photo21.jpg',
        'public/images/photo22.jpg'
    ];
    let currentIndex = -1;

    imagesArray.forEach(imageUrl => {
        if (!addedImages.has(imageUrl)) {
            const img = document.createElement('img');
            img.src = encodeURI(imageUrl);
            const div = document.createElement('div');
            div.appendChild(img);
            gallery.appendChild(div);
            addedImages.add(imageUrl);

            img.addEventListener('click', () => {
                currentIndex = imagesArray.indexOf(imageUrl);
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                updateArrows();
            });
        }
    });

    function updateArrows() {
        prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentIndex < imagesArray.length - 1 ? 'block' : 'none';
    }

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
            lightboxImg.src = imagesArray[currentIndex];
            updateArrows();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < imagesArray.length - 1) {
            currentIndex++;
            lightboxImg.src = imagesArray[currentIndex];
            updateArrows();
        }
    });
});