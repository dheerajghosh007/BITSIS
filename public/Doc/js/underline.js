nelement= document.getElementsByClassName("underline");

nelement.addEventListener("mouseenter", mouseEnter);
nelement.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
 nelement.style.color = "red";
}

function mouseLeave() {
  nelement.style.color = "black";
}
