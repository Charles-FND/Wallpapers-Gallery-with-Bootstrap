document.addEventListener('DOMContentLoaded', function () {
    const addImageBtn = document.getElementById('addImageBtn');
    const imageUpload = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');

    addImageBtn.addEventListener('click', () => {
        imageUpload.click();
    });

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('col-lg-4', 'col-md-6', 'mb-4', 'gallery-item');
                galleryItem.innerHTML = `
                    <img src="${imageUrl}" class="img-fluid">
                `;
                gallery.appendChild(galleryItem);
            };
            reader.readAsDataURL(file);
        }
    });
});
