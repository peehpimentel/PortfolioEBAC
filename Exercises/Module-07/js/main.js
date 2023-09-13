function formValidation(firstNumber, secondNumber) {
    return secondNumber > firstNumber
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    const firstNumber = document.getElementById('first-number').value;
    const secondNumber = document.getElementById('second-number').value;
    const formValidate = formValidation(firstNumber, secondNumber);
    const successMessage = `Success! The value of ${secondNumber} is greater than the value of ${firstNumber}!`;
    console.log(firstNumber);
    console.log(secondNumber);
    if(formValidate){
        const containerSuccessMessage = document.querySelector('.message');
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block';
        document.getElementById('first-number').value = '';
        document.getElementById('second-number').value = '';        
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
    console.log(formValidate);
})

function resetForm() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.message').style.display = 'none';
    const secondNumber = document.getElementById('second-number');
    if (secondNumber.classList.contains('error')) {
        secondNumber.classList.remove('error');
    }
}
resetForm();
const resetButton = document.getElementById('btn-reset');
resetButton.addEventListener('click', resetForm);


