document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.thumbnail');
    var zoom = document.getElementById('zoom');
    var zoomedImage = document.getElementById('zoomed_image');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            zoomedImage.src = this.src;
            zoom.style.display = 'flex';
        });
    });

    zoom.addEventListener('click', function() {
        this.style.display = 'none';
    });
});