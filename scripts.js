// плавное появление при скролле (очень легкий эффект “дорогого сайта”)

const items = document.querySelectorAll(".block, .gallery, .full-hero");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "1s ease";
  observer.observe(el);
});

