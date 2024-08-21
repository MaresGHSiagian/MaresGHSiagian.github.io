document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.querySelector(".animated-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animatedText.classList.add("visible");
      }
    });
  });

  observer.observe(animatedText);
});
