/**
 * Event on system color scheme to automatically toggle system theme if user hasn't set a preference
 */
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", event => {
        if (!localStorage.getItem("current-theme")) {
            applyTheme(event.matches ? "dark" : "light");
        }
    });