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

// redacting the text
let words = document.getElementById('input-textarea');
let redactText = document.getElementById('input-redact');
let btn = document.getElementById('redact-now');
let output = document.getElementById('result');
let replace = document.getElementById('replace');

btn.addEventListener('click', redactFunction);

function redactFunction(e) {
  e.preventDefault();
  callRedact(redactText.value.split(' '));
}
function callRedact(redacts) {
  for (value of redacts) {
    if (!value) continue;
    output.value = changeString(words.value, value);
  }
}
function changeString(word, redact) {
  const exp = RegExp(redact, 'ig');
  return word.replaceAll(
    exp,
    `${replace.value}${replace.value}${replace.value}${replace.value}`
  );
}
replace.addEventListener('copy', check);

function check(e) {
  e.preventDefault();
  console.log(
    `${replace.value}${replace.value}${replace.value}${replace.value}`
  );
}
