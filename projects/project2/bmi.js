const form = document.querySelector('form')

form.addEventListener('submit', function (event){
    event.preventDefault()
    const height = parseInt(document.querySelector('#Height').value)
    
    const Weight = parseInt(document.querySelector('#Weight').value)
    
    const Results = parseInt(document.querySelector('#results').value)


    if( height ==='' || height <0 || isNaN(height)){
        Results.innerHTML =`Pleses Give A valid integer  ${height}`;

    }
    else if( weight ==='' || weight <0 || isNaN(weight)){
        Results.innerHTML =`Pleses Give A valid integer  ${height}`;

    } else {
        const BMI = (weight /((height*height)/10000).toFixed(2))
        Results.innerHTML = `<span>${BMI}</span>`;
    }



});