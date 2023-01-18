const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const res = [];
  const arr = expr.split("");
  while (arr.length > 0) {
    const current = arr.splice(0, 10);
    let morse = [];

    while (current.length > 0) {
      let el = current.splice(0, 2).join("");
      if (el === "10") {
        morse.push(".");
      } else if (el === "11") {
        morse.push("-");
      }
    }
    if (morse.length) {
      res.push(MORSE_TABLE[morse.join("")]);
    } else res.push(" ");
  }

  return res.join("");
}

module.exports = {
  decode,
};
