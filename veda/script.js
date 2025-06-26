 // Vanta Background
  VANTA.DOTS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xf72585,
    color2: 0x7209b7,
    backgroundColor: 0x0a0118,
    spacing: 30.0,
    showLines: true
  });

  // Remove overlay after animation
  setTimeout(() => {
    const overlay = document.getElementById("intro-overlay");
    if (overlay) overlay.remove();
  }, 6500);


   function toggleMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("active");
    }

    function toggleDropdown(event) {
      event.preventDefault();
      const dropdown = document.getElementById("mobileDropdown");
      dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    }               
