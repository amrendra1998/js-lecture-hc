const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     const result = document.querySelector('#result')

     if (height === "" || height < 0 || isNaN(height) ) {
        result.innerHTML = `please give a valid height${height}`
     } else if (weight === "" || weight < 0 || isNaN(weight) ) {
        result.innerHTML = `please give a valid weight${weight}`
     } else {
        const bmi =  (weight / ((height*height)/10000)).toFixed(2)
        let cateogary = '';
        // Determine BMI cateogary 
         if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // show the result 
        result.innerHTML = `<span>BMI: ${bmi} (${category})</span>`;
     }
});
