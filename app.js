// function redactr(words, test) {
//   test = test.split(' ');
//   words = words.split(' ');
//   store = [];

//   let re = new RegExp(/[a-zA-Z]+/g);
//   for (let value of words) {
//     for (let testValue of test) {
//       if (value === testValue) {
//         console.log(value.toString().replace(re, 'xxx'));
//       } /* else {
//         store.push(value);
//       } */
//     }
//   }
//   //   console.log(store.join(' '));
// }

// redactr('Nneka is a girl', 'girl is');

let menuBar = document.getElementById('toggle-nav');
let closeNav = document.getElementById('close-nav');
let showMobile = document.getElementById('mobile');
function openMobileNav() {
  showMobile.style.width = '100%';
  document.getElementById('mobile-container').style.display = 'block';
}
function closeMobileNav() {
  showMobile.style.width = '0%';
  document.getElementById('mobile-container').style.display = 'none';
}
menuBar.addEventListener('click', openMobileNav);
closeNav.addEventListener('click', closeMobileNav);
