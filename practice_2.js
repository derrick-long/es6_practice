
function longestWord(sen){
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a,b) => b.length - a.length);

  const longestWordArr = sorted.filter((word)=>
    word.length === sorted[0].length);

  if(longestWordArr.length === 1){
    return longestWordArr[0];
  } else {
    longestWordArr.forEach(function(word){
      console.log(word);
    });
  }

}


function chunkArray(arr, len){
  const chunkedArray = [];

  let i = 0;

  while(i < arr.length){
    chunkedArray.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArray;
}


function flattenArray(arrays){
  return arrays.reduce((a, b)=> a.concat(b));
}

function isAnagram(str1, str2){
  return formatStr(str1) === formatStr(str2);
}


function formatStr(str){
  return str
    .replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

}

function letterChanges(str){
  let newStr = str.toLowerCase().replace(/[a-z]/gi,char =>{
    if(char === "z"){
      return 'a';
    } else {
      // incremets charcode to change char to next letter
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, vowel =>
     vowel.toUpperCase());
  return newStr;
}






















const output = letterChanges('Hello Therez');

console.log(output);
