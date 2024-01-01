const base = new URL(window.location);
console.log(base);
const theme = {
  'DEFAULT': '',
  'DARK': 'linear-gradient(90deg, #212121, #000)',
  'LIGHT': 'linear-gradient(to left, #ece9e6, #ffffff)',
  'LIGHT CITY': `url(./images/bg-light-city.jpg)`
}


const switcher = document.querySelector('.switch');
switcher.addEventListener('click', (evt) => {
  const clickedTheme = evt.target;
  const switchNodes = switcher.children;
  removeActiveClass(Array.from(switchNodes));
  addActiveClass(clickedTheme);

})

//移除active class
function removeActiveClass(nodes) {
  nodes.forEach(ele => {
    if (ele.className === 'active') {
      ele.classList.remove('active');
    }
  });
}
//新增active class
function addActiveClass(node) {
  node.classList.add('active');

  const cardSidebar = document.querySelector('.card-sidebar');
  const front = document.querySelector('.front');
  const back = document.querySelector('.back');
  cardSidebar.style.background = theme[node.innerText.toUpperCase()];
  console.log(theme[node.innerText.toUpperCase()])
  front.style.backgroundImage = theme[node.innerText.toUpperCase()];
  back.style.backgroundImage = theme[node.innerText.toUpperCase()];
  if (node.innerText.toUpperCase() === 'LIGHT CITY') {
    cardSidebar.style.background = '#b4b5ef4d'
    return;
  }
  if (node.innerText.toUpperCase() === 'LIGHT') {
    front.style.color = "#000";
    back.style.color = "#000";
    return;
  }
  if (node.innerText.toUpperCase() === 'DARK') {
    front.style.color = "#FFF";
    back.style.color = "#FFF";
  }
}

// background: linear - gradient(to left, #ece9e6, #ffffff);
