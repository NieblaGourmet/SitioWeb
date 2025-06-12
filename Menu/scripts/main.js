// Theme switcher
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
});

// Language switcher
const translations = {
    en: {
        title: "Niebla Gourmet",
        menuTitle: "Menu",
        cartTitle: "Cart",
        orderButton: "Order via WhatsApp",
        smoothie: "Tropical Smoothie",
        sandwich: "Cheese Sandwich"
    },
    es: {
        title: "Niebla Gourmet",
        menuTitle: "Menú",
        cartTitle: "Carrito",
        orderButton: "Solicitar por WhatsApp",
        smoothie: "Batido Tropical",
        sandwich: "Sándwich de Queso"
    }
};

document.getElementById("language").addEventListener("change", (e) => {
    const lang = e.target.value;
    translatePage(lang);
});

function translatePage(lang) {
    const keys = translations[lang];
    document.getElementById("title").textContent = keys.title;
    document.getElementById("menuTitle").textContent = keys.menuTitle;
    document.getElementById("cartTitle").textContent = keys.cartTitle;
    document.getElementById("orderButton").textContent = keys.orderButton;

    document.querySelectorAll(".item-name").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = keys[key];
    });
}
