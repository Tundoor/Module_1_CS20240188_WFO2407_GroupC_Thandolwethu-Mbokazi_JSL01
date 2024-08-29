function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result
      if (input.startsWith("pet_")) {
        result = "Valid Syntax";
      } else {
        result = "Invalid Syntax";
      }
    

         document.getElementById('result').innerText = result;
}


