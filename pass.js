function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pass = "";
let len = 0;
function input() {
  len = document.getElementById("length").value;
  document.getElementById("length").value = null;

}

function process() {
  if (len => 5) {
    for (let i = 0; i < len; i++) {
      let num = randomInteger(48, 122);
      pass = pass + String.fromCharCode(num);
    }
    // let p = document.getElementById("length")    
    alert(`Your password: ${pass} `)
    pass = "";
  } else {
    alert("Length should be greater than 5");
  }
}

function passGenerate() {
  input();
  process();
}
