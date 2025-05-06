// Load lucide icons
lucide.createIcons();

// Dark Mode Toggle
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
});

// Load theme dari localStorage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});
