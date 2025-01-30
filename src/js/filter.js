document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.luxury__btn');
  const cards = document.querySelectorAll('.luxury__card');

  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const filterValue = this.getAttribute('data-filter');

          // Remove 'active' class from all buttons and add it to the clicked one
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          // Loop through all cards and show/hide based on filter value
          cards.forEach(card => {
              if (filterValue === 'all' || card.classList.contains(filterValue)) {
                  card.classList.remove('hidden');
              } else {
                  card.classList.add('hidden');
              }
          });
      });
  });

  // Optionally, trigger the 'all' filter by default
  filterButtons[0].click();
});