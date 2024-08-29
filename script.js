function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = '';
    let alphaNumeric = new RegExp(/^[A-Za-z0-9]+$/i);                          
      if (input.startsWith("pet_") && alphaNumeric.test(input.slice(4))) {    // Validates whether alphanumeric and starts with pet_
        result = "Valid Syntax";
      } else {
        result = "Invalid Syntax";
      }


    document.getElementById('result').innerText = result;       // Reassigns the result varieble so it's displayed
}


