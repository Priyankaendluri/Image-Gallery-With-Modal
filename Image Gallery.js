// Get the modal
var modal = document.getElementById("myModal");

// Get all the images in the gallery
var images = document.querySelectorAll(".gallery-item");

// Get the modal image element and caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Loop through each image
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// When the user clicks on the close button, close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

