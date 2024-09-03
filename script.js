function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = '';
    let alphaNumeric = new RegExp(/^[0-9]{4}[a-zA-z]+$/i); //expression for alphanumeric numbers
    let colourChange = document.getElementById("result")                         
      
    if (input.startsWith("pet_") && alphaNumeric.test(input.slice(4))) {    // Validates whether alphanumeric and starts with pet_
        colourChange.classList.add('valid')  //changes the colour of the text
        result = "Valid Syntax";
        
      } else {
        colourChange.classList.add('invalid') //changes colour of the text
          result = "Invalid Syntax";
      };


    document.getElementById('result').innerText = result;       // Reassigns the result varieble so it's displayed
};


