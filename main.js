//All variables
let currentNum=''
let previousNum=''
let operator=''

//The displays on the calculator
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currenrOperandTextElement=document.querySelector('[data-current-operand]')

//The buttons on the calculator
const numberBtns=document.querySelectorAll('[data-number]')
const operationBtns=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
equalsButton.addEventListener('click', calculate);
const deleteButton=document.querySelector('[data-delete]')
const allCleaButtonr=document.querySelector('[data-all-clear]')

//Passes the number clicked on to the hanldeNumber() function
numberBtns.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        handleNumber(e.target.textContent)
    });
});

//Passes the operator clicked on to the hanldeNumber() function
operationBtns.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        handleOperator(e.target.textContent)

    });
});
//Passes the number clicked into the currentOperand display
function handleNumber(number){
    if(currentNum.length<=11){
        currentNum+= number;
    currenrOperandTextElement.textContent=currentNum;
    }   
}
//Passes the operator and the currentOperand display & switches it to previousOperand & resets currentOperand
function handleOperator(op){
    operator=op;
    previousNum=currentNum;
    previousOperandTextElement.textContent=previousNum +' '+ operator;
    currentNum='';
    currenrOperandTextElement.textContent='';
}

function calculate(){
    previousNum= Number(previousNum);
    currentNum= Number(currentNum);

    if(operator==='+'){
        previousNum= previousNum + currentNum;
    }
    previousOperandTextElement.textContent='';
    currenrOperandTextElement.textContent=previousNum;
}