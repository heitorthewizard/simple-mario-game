const player = document.querySelector(".player");
const pipe = document.querySelector(".pipe");
const jumpButton = document.querySelector("button");
const clouds = document.querySelector(".clouds");

const checkIfPlayerLost = setInterval(() => {
  const pipePosition = Number(
    window.getComputedStyle(pipe).left.replace("px", "")
  );

  const playerPosition = Number(
    window.getComputedStyle(player).bottom.replace("px", "")
  );

  const cloudsPosition = Number(
    window.getComputedStyle(clouds).left.replace("px", "")
  );

  const checkIfPlayerHasTouchedThePipe =
    pipePosition <= 120 && pipePosition > 0 && playerPosition < 100;

  if (checkIfPlayerHasTouchedThePipe) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`

    player.style.animation = "none";
    player.src = "./assets/game-over.png";

    player.style.bottom = `${playerPosition}px`;
    player.style.width = "75px";
    player.style.marginLeft = "50px";

    clearInterval(checkIfPlayerLost);
  }
}, 10);

jumpButton.addEventListener("click", jump);
document.addEventListener("keydown", jump);

function jump() {
  player.classList.add("jump");

  setTimeout(() => {
    player.classList.remove("jump");
  }, 500);
}
