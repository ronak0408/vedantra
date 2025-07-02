const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    function toggleServices() {
      const subServices = document.getElementById('subServices');
      const toggleIcon = document.getElementById('toggle-icon');
      const isVisible = subServices.style.display === 'block';

      if (isVisible) {
        subServices.style.display = 'none';
        toggleIcon.textContent = '+';
      } else {
        subServices.style.display = 'block';
        toggleIcon.textContent = '-';
      }
    }
