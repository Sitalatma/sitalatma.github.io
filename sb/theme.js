(function () {
    const STORAGE_KEY = "theme";

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
        updateButton(next);
    }

    function updateButton(theme) {
        const btn = document.getElementById("theme-toggle");
        if (!btn) return;
        btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    document.addEventListener("DOMContentLoaded", function () {
        const theme = getPreferredTheme();
        applyTheme(theme);

        const btn = document.getElementById("theme-toggle");
        if (btn) {
            btn.addEventListener("click", toggleTheme);
            updateButton(theme);
        }
    });
})();
