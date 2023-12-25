const sections = 5;
document.addEventListener("DOMContentLoaded", function() {
    const storyContainer = document.querySelector(".story-container");
 // Adjust based on the number of story sections

    for (let i = 1; i <= sections; i++) {
        var section = document.createElement("div");
        section.classList.add("story-section");
        section.textContent = `Chapter ${i}`;
        storyContainer.appendChild(section);
    }

    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY;
        const scrollHeight = storyContainer.clientHeight;
        const windowHeight = window.innerHeight;

        const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
        updateStory(scrollPercentage);
    });
});

function updateStory(scrollPercentage) {
    const sectionIndex = Math.floor(scrollPercentage / (100 / sections));
    // You can customize the behavior based on the current section index
    console.log(`Scroll Percentage: ${scrollPercentage.toFixed(2)}%, Current Section: ${sectionIndex + 1}`);
}
