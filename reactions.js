// Wait for the document to finish loading before running the code
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "reaction-container"
  const reactionContainers = document.querySelectorAll(".reaction-container");

  // Loop through each reaction container element
  reactionContainers.forEach((container) => {
    // Select the main icon element within the current container
    const mainIcon = container.querySelector(".main-icon");
    // Select the reactions menu element within the current container
    const reactions = container.querySelector(".reactions");

    // Add an event listener for mouseover events on the container
    container.addEventListener("mouseover", () => {
      // Show the reactions menu when the mouse is over the container
      reactions.style.display = "block";
    });

    // Add an event listener for mouseout events on the container
    container.addEventListener("mouseout", () => {
      // Hide the reactions menu when the mouse is no longer over the container
      reactions.style.display = "none";
    });

    // Add an event listener for click events on the reactions menu
    reactions.addEventListener("click", (event) => {
      // Check if the clicked element has the class "reaction"
      if (event.target.classList.contains("reaction")) {
        // Get the data-reaction attribute value from the clicked element
        const selectedReaction = event.target.dataset.reaction;
        // Get the text content of the clicked element (the reaction icon)
        const reactionIcon = event.target.textContent;
        // Update the main icon with the selected reaction icon
        mainIcon.textContent = reactionIcon;
        // Update the main icon's class to "main-icon"
        mainIcon.className = "main-icon";
        // Hide the reactions menu after selecting a reaction
        reactions.style.display = "none";
      }
    });
  });
});
