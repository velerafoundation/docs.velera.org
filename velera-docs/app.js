(function () {
  const btn = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");

  if (!btn || !sidebar) return;

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking a link on mobile
  sidebar.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }
  });
})();
