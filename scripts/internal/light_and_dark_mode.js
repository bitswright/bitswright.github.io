/** 
 * Applies given theme on document 
 * @param {string} theme - Theme to be applied. Possible values: "light", "dark"
 */
function applyTheme(theme) {
    document.documentElement.setAttribute("current-theme", theme);
}

/** 
 * Toggles document theme between dark and light theme.
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("current-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("current-theme", newTheme);
}

/**
 * Initialises document theme using saved theme or system preference
 */
function initialiseTheme() {
    const savedTheme = localStorage.getItem("current-theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // fallback to system preference
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(systemPrefersDark ? "dark" : "light");
    }
}

//Initialise theme on page load
initialiseTheme();
