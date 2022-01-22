window.addEventListener("DOMContentLoaded", function() {
  // toggle sidebar
  document.addEventListener("click", (e) => {
    if(e.target.closest(".sidebar__toggle-icon")) {
      e.preventDefault()
      document.getElementById("sidebar").classList.toggle("open")
    }
  })
});
