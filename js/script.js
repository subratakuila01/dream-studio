// Loading Bar
const loadingBar = document.getElementById("loading-bar");
let progress = 0;
const interval = setInterval(() => {
  if (progress < 90) {
    progress += Math.random() * 10;
    if (loadingBar) loadingBar.style.width = progress + "%";
  }
}, 100);

window.addEventListener("load", () => {
  clearInterval(interval);
  if (loadingBar) loadingBar.style.width = "100%";
  setTimeout(() => {
    if (loadingBar) loadingBar.style.opacity = "0";
  }, 500);
});

// Hamburger toggle menu
const menuIcon = document.getElementById("menuIcon");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuIcon.addEventListener("click", () => {
  sideMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show");
});



// Image Button Navigation
const imageButton = document.getElementById('jsImageButton');
if (imageButton) {
  imageButton.addEventListener('click', function () {
    console.log('Image button clicked - navigating to new page');
    window.location.href = 'gallery.html';
  });
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Scroll Button
const scrollBtn = document.querySelector('.scroll-top');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
}

// Filter Navigation (if used)
const filters = document.querySelectorAll('.filter h3');
if (filters.length > 0) {
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const link = filter.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });
}

// Disable right-click
document.addEventListener("contextmenu", event => event.preventDefault());

// Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+Shift+J
document.addEventListener("keydown", event => {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") ||
    (event.ctrlKey && event.key.toLowerCase() === "u") ||
    (event.ctrlKey && event.key.toLowerCase() === "s") ||
    (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "j")
  ) {
    event.preventDefault();
    event.stopPropagation();
    alert("Developer tools are disabled on this site.");
  }
});
