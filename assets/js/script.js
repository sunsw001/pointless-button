const pressme = document.querySelector('.add-button');

let text = 'pressme';

function clickMe(e) {
  if (typeof text == 'string') {
    console.log(1);
    text = 1;
  } else {
    text += 1;
  }

  pressme.innerText = text;
}

pressme.addEventListener('click', clickMe);
