let currentNumb=''
let previousNum=''
let operator=''

const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currenrOperandTextElement=document.querySelector('[data-current-operand]')

const numberBtns=document.querySelectorAll('[data-number]')
const operationBtns=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allCleaButtonr=document.querySelector('[data-all-clear]')

numberBtns.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        handleNumber(e.target.textContent)
    })
})

function handleNumber(number){
    console.log(number)
}