function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = '';
    let alphaNumeric = new RegExp(/^[A-Za-z0-9]+$/i); 
    let colourChange = document.getElementById("result")                         
      
    if (input.startsWith("pet_") && alphaNumeric.test(input.slice(4))) {    // Validates whether alphanumeric and starts with pet_
        colourChange.classList.add('valid')
        result = "Valid Syntax";
        
      } else {
        colourChange.classList.add('invalid') 
          result = "Invalid Syntax";
      };


    document.getElementById('result').innerText = result;       // Reassigns the result varieble so it's displayed
};


