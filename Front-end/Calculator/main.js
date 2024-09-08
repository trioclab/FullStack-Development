// function appendValue(element) {
//   let inputField = document.getElementById("input-field");

//   if (element.textContent == "AC") {
//     inputField.value = "";
//   } else if (element.textContent == "DEL") {
//     inputField.value = inputField.value.slice(0, -1);
//   } else if (element.textContent == "=") {
//     try {
//       inputField.value = eval(inputField.value);
//     } catch (error) {
//       inputField.value = "ERROR";
//     }
//   } else {
//     inputField.value += element.textContent;
//   }
// }



// Again written by me , not completely I write it by myself or have all clear concepts but I tried

function appendValue(values){
  let inputValue = document.getElementById("input-field");
  if(values.textContent == "AC"){
    inputValue.value = "";
  }
  else if(values.textContent == "DEL"){
    inputValue.value = inputValue.value.slice(0 , -1);
  }
  else if( values.textContent == "="){
     try{
      inputValue.value = eval(inputValue.value);
     }
     catch(error){
      inputValue.value = "Error"
     }
  }
  else{
    inputValue.value += values.textContent;
  }
}