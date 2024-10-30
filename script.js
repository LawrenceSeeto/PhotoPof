document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const gallery = document.querySelector('#gallery');
    const addedImages = new Set();
    let imagesArray = [
        'images/20230827_103909019_iOS.jpg',
        'images/20230830_000320514_iOS.jpg',
        'images/20231127_074814822_iOS.jpg',
        'images/20231227_060730254_iOS 1.jpg',
        'images/20231227_062850610_iOS.jpg',
        'images/20231230_103215562_iOS.jpg',
        'images/20240101_074849325_iOS.jpg',
        'images/20240202_190335037_iOS.jpg',
        'images/20240202_230148294_iOS.jpg',
        'images/20240409_081937326_iOS.jpg',
        'images/20240606_095327914_iOS.jpg',
        'images/20240606_102943301_iOS.jpg',
        'images/20240606_103017839_iOS 1.jpg',
        'images/20240608_020653190_iOS.jpg',
        'images/20240608_102610132_iOS.jpg',
        'images/20240608_114214811_iOS.jpg',
        'images/20240608_115121592_iOS.jpg',
        'images/20240621_024647919_iOS.jpg',
        'images/20240824_072324730_iOS.jpg',
        'images/20241012_095924995_iOS.jpg',
        'images/20241012_103322481_iOS.jpg',
        'images/photo1.jpg'
    ];
    let currentIndex = -1;

    imagesArray.forEach(imageUrl => {
        if (!addedImages.has(imageUrl)) {
            const img = document.createElement('img');
            img.src = imageUrl;
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