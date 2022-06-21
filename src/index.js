const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    console.log(expr);
    let arr = [];
    let result = [];
    for(let i = 0; i < expr.length; i += 10){
      let substr = expr.substr(i, 10);
      arr.push(substr);
    }
    for(let i = 0; i < arr.length; i++){
      let word;
      word = arr[i].split('00').join('').split('10').join('.').split('11').join('-').split('**********').join('space');
      result.push(word);
    }
    arr.length = 0;
    result.forEach(element => {
      let word2;
      if(element === 'space') {word2 = ' ';
    } else {word2 = MORSE_TABLE[element];}
      arr.push(word2);  
    })
      return arr.join('');
  }

module.exports = {
    decode
}