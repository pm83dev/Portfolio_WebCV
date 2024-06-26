function showImage(imageUrl) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modalImg.src = imageUrl;
    modal.style.display = "flex";
}

document.getElementById('imageModal').onclick = function() {
    this.style.display = "none";
}

function showModal(message) {
    var modal = document.getElementById('msgModal');
    var modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.style.display = "flex";
}

document.getElementById('msgModal').onclick = function() {
    this.style.display = "none";
}