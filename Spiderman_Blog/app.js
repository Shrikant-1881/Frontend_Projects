document.querySelector("body").prepend(div1);

let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.onclick = SAYHELLO; //dont make parenthesis her i.e ()   as then it will directly execute if we ru the program
  btn.onmouseenter = function () {
    console.log("You entered the region of button");
  };

  btn.addEventListener("click", function () {
    console.log("Hi bro! ");
  });
  btn.addEventListener("click", function () {
    alert("Hello bro! ");
  });
}

function SAYHELLO() {
  alert("button was liked.");
}
