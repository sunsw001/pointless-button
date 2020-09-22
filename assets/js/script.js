const pressme = document.querySelector('.add-button');

let text = 'pressme';

function clickMe() {
  if (typeof text == 'string') {
    text = 1;
  } else {
    text += 1;
  }

  pressme.innerText = text;
}

pressme.addEventListener('click', clickMe);
