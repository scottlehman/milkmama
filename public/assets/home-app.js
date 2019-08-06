const cover = document.querySelector('.cover');
const title = document.querySelector('#title');
const navlinks = document.querySelector('.navlinks');
const table = document.querySelectorAll('.list');

const tl = new TimelineMax();

tl.fromTo(
  title,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut },
  "+=0.2"
)
.fromTo(
  navlinks,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut },
  "-=1"
)
.fromTo(
  cover,
  1,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut },
  "-=1"
)
.fromTo(
  table,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut },
  "+=0.5"
)
.repeat();

console.log(navigator.connection);
