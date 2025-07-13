document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
    
    const modal = document.getElementById('galleryModal');
    const closeBtn = document.querySelector('.close-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const mediaTitle = document.getElementById('mediaTitle');
    const mediaDescription = document.getElementById('mediaDescription');
    const mediaType = document.getElementById('mediaType');
    const mediaPlaceholder = document.getElementById('mediaPlaceholder');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const type = this.getAttribute('data-type');
            
            mediaTitle.textContent = title;
            mediaDescription.textContent = description;
            mediaType.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            
            const mediaContent = this.querySelector('.placeholder').innerHTML;
            
            if (type === 'image') {
                mediaPlaceholder.innerHTML = mediaContent;
                const modalImage = mediaPlaceholder.querySelector('img');
                if (modalImage) {
                    modalImage.style.width = '100%';
                    modalImage.style.height = '100%';
                    modalImage.style.objectFit = 'contain';
                }
            } else if (type === 'video') {
                mediaPlaceholder.innerHTML = mediaContent;
                const modalVideo = mediaPlaceholder.querySelector('video');
                if (modalVideo) {
                    modalVideo.style.width = '100%';
                    modalVideo.style.height = '100%';
                    modalVideo.controls = true;
                    modalVideo.autoplay = false;
                }
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
        
        const modalVideo = mediaPlaceholder.querySelector('video');
        if (modalVideo) {
            modalVideo.pause();
        }
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
            
            const modalVideo = mediaPlaceholder.querySelector('video');
            if (modalVideo) {
                modalVideo.pause();
            }
        }
    });
});