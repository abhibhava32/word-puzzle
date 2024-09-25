document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const currentMode = localStorage.getItem("mode") || "light";

    // Set initial mode
    document.body.classList.add(currentMode);
    document.querySelector('.gameContainer').classList.add(currentMode);

    darkModeToggle.addEventListener("click", () => {
        const newMode = currentMode === "light" ? "dark" : "light";
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        document.querySelector('.gameContainer').classList.toggle("dark");
        document.querySelector('.gameContainer').classList.toggle("light");
        
        // Save mode to local storage
        localStorage.setItem("mode", newMode);
    });
});
