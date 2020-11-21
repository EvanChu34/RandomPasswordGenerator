// Assignment Code
window.addEventListener("load", function(){
  
  var plength = prompt("How many characters do you want in your password?")

  if(plength < 8 || plength > 128){
    alert("Length must be 8-128 characters")
  }

  if(plength >= 8 && plength <= 128){
    var cLowercase = confirm("Would you like to have lowercase letters?") ;
    var cUppercase = confirm("Would you like to have uppercase letters?") ;
    var cNumber = confirm("Would you like to have numbers?") ;
    var cSymbol = confirm("Would you like to have symbols?") ;
  }

  if (cUppercase != true && cLowercase != true && cNumber != true && cSymbol != true){
    alert("Please select an at least one character type")
  }

 
  resultEl = document.getElementById('password');

  document.getElementById('generate').addEventListener('click', () => {
    resultEl.value = generatePassword(cLowercase, cUppercase, cNumber, cSymbol, plength);
  });
});


const randomFunc = {
  lower : getRandomLowerCase,
  upper : getRandomUpperCase,
  number : getRandomNumber,
  symbol : getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length){
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  },{
    upper
  },{
    number
  },{
    symbol
  }].filter(item => Object.values(item)[0]);

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0,length);
  
  return finalPassword;
}

function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
  const symbol = "!@#$%^&*(){}[]=<>/,.";
  return symbol[Math.floor(Math.random()*symbol.length)];
}
