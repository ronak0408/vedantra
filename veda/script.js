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

  const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});



  //  function openSidebar() {
  //     const sidebar = document.getElementById("sidebar");
  //     sidebar.classList.add("active");
  //     sidebar.style.display = "block"
  //     document.body.style.overflow = "hidden";
  //   }

  //   function closeSidebar() {
  //     const sidebar = document.getElementById("sidebar");
  //     sidebar.classList.remove("active");
  //     document.body.style.overflow = "auto";
  //     sidebar.style.display = "none"
  //   }

    function toggleDropdown() {
      const dropdown = document.querySelector(".dropdown");
      const arrow = document.getElementById("arrow");
      dropdown.classList.toggle("show-dropdown");
      arrow.classList.toggle("rotate");
    }  
    
