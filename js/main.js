function showImage(imageUrl) {
    var imageContainer = document.getElementById('image-container');
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Immagine del progetto'; // Sostituisci con una descrizione appropriata
    img.style.maxWidth = '100%'; // Esempio: larghezza massima al 100% del contenitore
    imageContainer.innerHTML = ''; // Pulisce il contenitore prima di aggiungere l'immagine
    imageContainer.appendChild(img);
}