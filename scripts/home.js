// Get the containers and sliding images elements
const containerLeft = document.getElementById('scrollable-container-left');
const containerRight = document.getElementById('scrollable-container-right');

// Clone the sliding images for both containers
const clonedImagesLeft = containerLeft.querySelector('.sliding-images').cloneNode(true);
const clonedImagesRight = containerRight.querySelector('.sliding-images').cloneNode(true);

// Append the cloned images to their respective containers
containerLeft.appendChild(clonedImagesLeft);
containerRight.appendChild(clonedImagesRight);