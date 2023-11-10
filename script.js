const display = document.querySelector(".display");
const smallDisplay = document.querySelector('#smallDisplay');
const buttons = Array.from(document.querySelectorAll("button"));

let history = '';

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    if (e.target.classList.contains('toggle-button')) {
      return;
    }

    if (e.target.innerText === 'C') {
      display.innerText = '0';
      smallDisplay.innerText = '';
      history = '';
    } else {
      buttons.forEach((btn) => {
        btn.classList.remove('operator-clicked');
      });

      switch (e.target.innerText) {
        case '+':
        case '-':
        case '*':
        case '/':
          history = display.innerText + e.target.innerText;
          smallDisplay.innerText = history;
          display.innerText = e.target.innerText;
          buttons.forEach((btn) => {
            if (btn.innerText === e.target.innerText) {
              btn.classList.add('operator-clicked');
            }
          });
          break;
        case '=':
          smallDisplay.innerText = history;
          display.innerText = eval(history);
          break;
        default:
          if (display.innerText === '0' && e.target.innerText !== '.') {
            display.innerText = e.target.innerText;
          } else {
            display.innerText += e.target.innerText;
          }
          history += e.target.innerText;
          smallDisplay.innerText = history;
      }
    }
  });

  button.addEventListener("mouseup", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove('operator-clicked');
    });
  });
});



const githubImage = document.querySelector('.title img');
const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    githubImage.src = './img/github-mark.svg';
  } else {
    githubImage.src = './img/github-mark-white.svg';
  }

});

