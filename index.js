const output_Years = document.querySelector(".output_Years");
const output_Months = document.querySelector(".output_Months");
const output_Days = document.querySelector(".output_Days");
const submit_btn = document.querySelector(".submit_btn");

//input element
let isValid = false;
const input_Years = document.querySelector("#Years");
const input_Months = document.querySelector("#Months");
const input_Days = document.querySelector("#Days");
//const submit_btn = document.querySelector('.submit_btn');
// Error Element 
const Erro_Years = document.querySelector(".Erro_Years");
const Erro_Months = document.querySelector(".Erro_Months");
const Erro_days = document.querySelector(".Erro_Days");
input_days.addEventListener ("input", (e) =>{
    if(+input_days.value > 31) {
        Erro_days.textContent = "Must he a valid date"
        isValid = false;
    } else{
        isValid = true;
    }
    if(+input_days.value === 0){
        isValid = false;
        Erro_day.textContent('This field is required')
        isValid = false;
    }
})