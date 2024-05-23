// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let pass = "";
// let len = null;
// function input() {
//   len = document.getElementById("length").value;
//   spch = document.getElementById("spch").value;
//   num = document.getElementById("num").value;
//   alph = document.getElementById("alph").value;
  
//   document.getElementById("length").value = null;


// }

// function process() {
//   if (len => 5) {
//     for (let i = 0; i < len; i++) {
//       let num = randomInteger(48, 122);
//       pass = pass + String.fromCharCode(num);
//     }
//     // let p = document.getElementById("length")    
//     alert(`Your password: ${pass} `)
//     pass = "";
//   } 
//   else if (len<5) {
//     alert("Length should be greater than 5");
//   }
 
//   else{
//     alert("Enter a Valid Number")
//   }

// }

// function passGenerate() {
//   input();
//   process();
// }

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function input() {
  let len = document.getElementById("length").value;
  if (len === "" || isNaN(len) || len < 5) {
      alert("Enter a valid number greater than 5");
      document.getElementById("length").value = null;
      return null;
  }
  return parseInt(len);
}

function generatePassword(length, includeSpch, includeNum, includeAlph) {
  let charSet = '';
  if (includeSpch) charSet += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  if (includeNum) charSet += '0123456789';
  if (includeAlph) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (charSet === '') {
      alert("Select at least one character set.");
      return '';
  }

  let result = '';
  const charSetLength = charSet.length;
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSetLength);
      result += charSet[randomIndex];
  }
  return result;
}

function process(len) {
  const includeSpch = document.getElementById("spch").checked;
  const includeNum = document.getElementById("num").checked;
  const includeAlph = document.getElementById("alph").checked;

  const password = generatePassword(len, includeSpch, includeNum, includeAlph);
  if (password) {
      alert(`Your password: ${password}`);
  }
}

function passGenerate() {
  let len = input();
  if (len !== null) {
      process(len);
  }
}