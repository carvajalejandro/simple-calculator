//All variables
let currentNum=''
let previousNum=''
let operator=''

//The displays on the calculator
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currenrOperandTextElement=document.querySelector('[data-current-operand]')
window.addEventListener('keydown', handleKeyPress)

//The buttons on the calculator
const numberBtns=document.querySelectorAll('[data-number]')
const operationBtns=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
equalsButton.addEventListener('click', ()=>{
    if(currentNum!= '' && previousNum!=''){
        calculate();
    }
});

const deleteButton=document.querySelector('[data-delete]')
const allClearButtonr=document.querySelector('[data-all-clear]')
allClearButtonr.addEventListener('click', clearCalc);

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
    if(previousNum!=='' && currentNum!=='' && operator===''){
        previousNum=''
        currenrOperandTextElement=currentNum
    }
    if(currentNum.length<=11){
        currentNum+= number;
        currenrOperandTextElement.textContent=currentNum;
    }   
}
//Passes the operator and the currentOperand display & switches it to previousOperand & resets currentOperand
function handleOperator(op){
    if(previousNum===''){
        previousNum=currentNum;
        operatorCheck(op);
    }else if (currentNum===''){
        operatorCheck(op);
    }else{
    calculate();
    operator=op;
    currenrOperandTextElement.textContent='0';
    previousOperandTextElement.textContent=previousNum +' '+ operator;
    }
}

function operatorCheck(text){
    operator=text;
    previousOperandTextElement.textContent=previousNum +' '+ operator;
    currenrOperandTextElement.textContent='0';
    currentNum='';
}
function calculate(){
    previousNum= Number(previousNum);
    currentNum= Number(currentNum);

    if(operator==='+'){
        previousNum= previousNum + currentNum;
    } else if (operator==='-'){
        previousNum= previousNum - currentNum;
    } else if (operator==='*'){
        previousNum= previousNum * currentNum;
    } else if (operator==='÷'){
        previousNum= previousNum / currentNum;
    }
  previousNum= previousNum.toString();
  displayResults();
}
function displayResults(){
    currenrOperandTextElement.textContent=previousNum;
    previousOperandTextElement.textContent='';
    operator=''
    currentNum=''
}
// clear everything function
function clearCalc (){
    currentNum='';
    previousNum='';
    operator='';
    currenrOperandTextElement.textContent='0';
    previousOperandTextElement.textContent='';
}
function handleKeyPress(e){
e.preventDefault()
if(e.key>=0 && e.key<=9){
    handleNumber(e.key);
}
if(
    e.key === 'Enter'||
    (e.key=== '=' && currentNum != '' && previousNum !='')
){
    calculate();
}
if(e.key=== '+' || e.key=== '-' || e.key=== '*'){
    handleOperator(e.key)
}
if(e.key=== '/'){
    handleOperator('÷')

}
if(e.key==='Backspace'){
    handleDelete();
}
}
function handleDelete() {
    if (currentNum !== "") {
      currentNum = currentNum.slice(0, -1);
      currenrOperandTextElement.textContent = currentNum;
      if (currentNum === "") {
        currenrOperandTextElement.textContent = "0";
      }
    }
    if (currentNum === "" && previousNum !== "" && operator === "") {
      previousNum = previousNum.slice(0, -1);
      currenrOperandTextElement.textContent = previousNum;
    }
  }