var ingredient = [];
var measurement = [];


function getOutput() {
  ingredientVal = document.getElementById('ingredient1').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient2').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient3').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient4').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient5').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient6').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient7').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient8').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient9').value;
  ingredient.push(ingredientVal);

  ingredientVal = document.getElementById('ingredient10').value;
  ingredient.push(ingredientVal);

  var desired = parseInt(document.getElementById('desired').value);
  var input = parseInt(document.getElementById('input').value);
  var factor = desired/input;

  var measurementVal = parseInt(document.getElementById('measurement1').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement2').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement3').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement4').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement5').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement6').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement7').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement8').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement9').value);
  measurement.push(measurementVal);

  measurementVal = parseInt(document.getElementById('measurement10').value);
  measurement.push(measurementVal);




  for (let i = 0; i < measurement.length; i++) {
    measurement[i] = (measurement[i] * factor).toFixed(1);
  }

  let text = "";
  for(let i = 0; i < ingredient.length; i++) {
    if (ingredient[i].length !== 0){

      text += "Ingredient: " + ingredient[i] + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
      if (isNaN(measurement[i])) {        text += "<br>"
    } else {
      text += "Measurement: " + measurement[i] + "<br>";
    }
  }
}


document.getElementById("demo").innerHTML = text;

  return false; // stop submission
}
