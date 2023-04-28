const goblin = document.createElement("img");
goblin.setAttribute("src", "/src/img/goblin.png");

const getHole = (index) => document.querySelector(`#hole${index}`);

const activateHole = (index) => getHole(index).append(goblin);

const holeInterval = setInterval(() => {
  const activeHoleIndex = Math.floor(1 + Math.random() * 16);
  activateHole(activeHoleIndex);
}, 1500);
