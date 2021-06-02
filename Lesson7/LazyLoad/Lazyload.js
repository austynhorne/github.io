let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
 threshold: 0,
 rootMargin: "0px 0px 50px 0px"
};

const loadImages = (Image) => {
 Image.setAttribute('src', Image.getAttribute('data-src'));
 Image.onload = () => {Image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
 const imgObserver = new IntersectionObserver((items, observer) => {
  items.forEach((item) => {
  });
 }, imgOptions);

 imagesToLoad.forEach((img) => {
  imgObserver.observe(img);
 });
}
else {} 