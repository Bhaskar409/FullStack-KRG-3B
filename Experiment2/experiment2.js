 const body = document.body;
    const toggleBtn = document.getElementById("themeToggle");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
      toggleBtn.textContent = "☀️ Toggle Theme";
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Toggle Theme";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Toggle Theme";
      }
    });
