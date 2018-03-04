function reverseString(string){
  var step;
  string = string.split("");
  string = string.reverse();
  var result = "";
  for ( step = 0; step < string.length; step++ ){
    result = result + string[step];
  }
  console.log(result);

}



function isPalindrome(str){
  const revString = str.split('').reverse().join('');
  return revString === str;
}

function reverseInt(int){
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}

function capitalizeLetters(sentence){
 const words = sentence.toLowerCase().split(' ');
 var capitalized = "";
  words.forEach(function(word){
    word = word.replace(word[0], word[0].toUpperCase());
    capitalized = capitalized + word + " ";

  });
  return capitalized;
}



function maxCharacter(str) {
  const charMap = {};
  var maxNum = 0;
  var maxChar = '';

  str.split('').forEach(function(char){
    if(charMap[char]){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for(let char in charMap){
      if (charMap[char] > maxNum){
        maxNum = charMap[char];
        maxChar = char;
      }
  }
  return maxChar;
}

function fizzBuzz(){
  for(let i = 1; i <= 100; i++ ) {
    if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz!");
    }else if(i % 5 == 0){
      console.log("Buzz");
    }else if(i % 3 == 0){
      console.log("Fizz");
    }
  }
}


const output = fizzBuzz();

console.log(output);
