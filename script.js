const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");

giftBox.addEventListener("click", () => {
  giftBox.style.display = "none";
  surprise.style.display = "block";
});
