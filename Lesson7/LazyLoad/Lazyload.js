const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  img.setAttribute('src',
  img.getAttribute('data-src'));
  img.onload =() =>
  {img.removeAttribute('data-src');};

}

const imgOptions = {
  threshold: 1,
  rootMargin: "390px 0px 390px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(Image => {
  imgObserver.observe(Image);
});