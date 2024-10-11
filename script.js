// Select the modal and the close button
const modal = document.getElementById("myModal");
const closeModalButton = document.getElementsByClassName("close")[0];

// Function to show modal with details
function openModal(name) {
    let details;
    switch (name) {
        case 'Brawlstar':
            details = 'Details about Brawlstar. <a href="https://brawlify.com/stats/profile/20CL9C2JLR#gsc.tab=0" target="_blank">Visit</a>';
            break;
        case 'MonkeyType':
            details = 'Details about MonkeyType. <a href="https://monkeytype.com" target="_blank">Visit</a>';
            break;
        case 'Leetcode':
            details = 'Details about Leetcode. <a href="https://leetcode.com" target="_blank">Visit</a>';
            break;
        case 'Github':
            details = 'Details about Github. <a href="https://github.com" target="_blank">Visit</a>';
            break;
        case 'Tetris':
            details = 'Details about Tetris. <a href="https://tetris.com" target="_blank">Visit</a>';
            break;
        case 'Linkedin':
            details = 'Details about Linkedin. <a href="https://linkedin.com" target="_blank">Visit</a>';
            break;
        case 'TableauPublic':
            details = 'Details about TableauPublic. <a href="https://public.tableau.com" target="_blank">Visit</a>';
            break;
        default:
            details = 'Details not available.';
    }

    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalContent").innerHTML = details; // Use innerHTML for links
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal(); // Hide the modal
    }
}
