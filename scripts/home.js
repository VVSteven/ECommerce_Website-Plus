// Get the containers and sliding images elements
const containerLeft = document.getElementById('scrollable-container-left');
const containerRight = document.getElementById('scrollable-container-right');

// Clone the sliding images for both containers
const clonedImagesLeft = containerLeft.querySelector('.sliding-images').cloneNode(true);
const clonedImagesRight = containerRight.querySelector('.sliding-images').cloneNode(true);

// Append the cloned images to their respective containers
containerLeft.appendChild(clonedImagesLeft);
containerRight.appendChild(clonedImagesRight);

// Set the animation duration for the cloned images
clonedImagesLeft.style.animationDuration = '30s'; // Adjust the duration as needed
clonedImagesRight.style.animationDuration = '35s'; // Adjust the duration as needed

// Start the animation for the original and cloned images for both containers
containerLeft.querySelector('.sliding-images').style.animation = 'conveyorBelt 30s linear infinite';
clonedImagesLeft.style.animation = 'conveyorBelt 30s linear infinite';

containerRight.querySelector('.sliding-images').style.animation = 'conveyorBelt 35s linear infinite';
clonedImagesRight.style.animation = 'conveyorBelt 35s linear infinite';
