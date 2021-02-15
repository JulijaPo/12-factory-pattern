const DOM_num1 = document.querySelector('#num1')
const DOM_num2 = document.querySelector('#num2')
const DOM_operation = document.querySelector('#operation')
const DOM_button = document.querySelector('button')
const DOM_answer = document.querySelector('#answer')
//console.log(DOM_num1)
//console.log(DOM_operation)
//console.log(DOM_num2)
//console.log(DOM_button)
//console.log(DOM_answer)
const sum = (a,b) => a + b
const minus = (a,b) => a - b
const multiply = (a,b) => a * b
const divide = (a,b) => a / b

const calcFactory = (n1, op, n2) => {
    const mathFunction = {
        '+': sum,
        'plus':sum,
        '-': minus,
        'minus': minus,
        '*': multiply,
        'multiply':multiply,
        '/': divide,
        'divide': divide,

    }
    //console.log(mathFunction[op])
    const func = mathFunction[op]
    return func(n1, n2)
}

function calcExpresion(){
    const num1 = parseInt(DOM_num1.value) // parseInt nes string
    const num2 = parseInt(DOM_num2.value)
    const operation = DOM_operation.value //+negalima parseint

    const rez =  calcFactory (num1, operation, num2) 
    
    /* if (operation === '+'){
        console.log(num1, operation, num2, '=', sum(num1, num2))
    }
    if (operation === '-'){
        console.log(num1, operation, num2, '=', minus(num1, num2))
    }
    if (operation === '*'){
        console.log(num1, operation, num2, '=', multiply(num1, num2))
    }
    if (operation === '/'){
        console.log(num1, operation, num2, '=', divide(num1, num2))
    } */
  
     console.log(num1, operation, num2, '=', rez)


}
DOM_button.addEventListener('click', event => {
    event.preventDefault()
    
    calcExpresion()
})

