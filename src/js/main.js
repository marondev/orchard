// This is to check the DOM is already loaded
window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

function openModal(imageSrc) {
  // Get the modal and modal image elements
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');

  // Set the modal image source
  modalImage.src = imageSrc;

  // Show the modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Close the modal
function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Get all images with class .img
const images = document.querySelectorAll('img.img');

// Loop through images and add event listener
images.forEach(image => {
  image.addEventListener('click', () => {
    const imageSrc = image.getAttribute('data-image@2x');
    openModal(imageSrc);
  });
});

// Show data when clicking a link
function gotoLink() {
  console.log('Link has been clicked');
  return false;
}
