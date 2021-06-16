const h1 = document.querySelector('h1');
let width = window.innerWidth;
let height = window.innerHeight;

const updateValues = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  h1.innerHTML = `Window height: ${height} <br>Window width: ${width}`;
}

window.addEventListener('resize', updateValues);

h1.innerHTML = `Window height: ${height} <br>Window width: ${width}`;